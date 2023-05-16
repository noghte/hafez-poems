import json
import urllib.request
import xml.etree.ElementTree as ET

def download_file(url, filename):
    urllib.request.urlretrieve(url, filename)

# URL of the XML file
xml_url = "https://i.ganjoor.net/android/androidgdbs.xml"
local_file = "androidgdbs.xml"

# Download the XML file
print("Downloading XML file...")
download_file(xml_url, local_file)
print("XML file downloaded successfully!")

# Parse the XML file
tree = ET.parse(local_file)
root = tree.getroot()

data = []
# Iterate over <gdb> tags and extract the required data
for gdb in root.findall("gdb"):
    cat_name = gdb.find("CatName").text
    poet_id = gdb.find("PoetID").text
    cat_id = gdb.find("CatID").text

    item = {
        "CatName": cat_name,
        "PoetID": poet_id,
        "CatID": cat_id
    }
    data.append(item)

# Write the extracted data to a JSON file
json_data = json.dumps(data, ensure_ascii=False, indent=4)
with open("data.json", "w", encoding="utf-8") as file:
    file.write(json_data)

print("JSON file created: data.json")
