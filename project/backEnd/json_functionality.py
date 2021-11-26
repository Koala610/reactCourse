"""
"""
import json

def serialize_json(json_obj: dict, file_name: str) -> None:
	with open(file_name, 'w') as json_file:
		json.dump(json_obj, json_file)

def get_json_from_file(file_name: str) -> dir:
	with open(file_name, 'r') as json_file:
		return json.load(json_file)

def main():
	file = '1.json'
	"""
	test_json = get_json_from_file(file)
	print(test_json)
	test_json.append({
		'name': '321'
	})
	serialize_json(test_json, file)"""


if __name__ == '__main__':
	main()