import urllib.request
import xml.etree.ElementTree as ET

def download_file(url, filename):
    urllib.request.urlretrieve(url, filename)

# URL of the XML file
xml_url = "https://i.ganjoor.net/android/androidgdbs.xml"

# Parse the XML file
tree = ET.parse(urllib.request.urlopen(xml_url))
root = tree.getroot()

# Iterate over <DownloadUrl> tags and download the files
for gdb in root.findall("gdb"):
    download_url = gdb.find("DownloadUrl").text
    file_ext = gdb.find("FileExt").text
    filename = download_url.split("/")[-1]

    print("Downloading:", filename)
    download_file(download_url, filename)
    print("Download complete!")
