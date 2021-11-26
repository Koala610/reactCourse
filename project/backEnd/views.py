"""
"""
import json_functionality as json_func
import settings

from app import app, request, jsonify





def add_request(request):
	json_file = json_func.get_json_from_file(settings.file)
	json_file.append(request.json)
	json_func.serialize_json(json_file, settings.file)



def get_todo_by_id(todos, id):
	for todo in todos:
		if todo['id'] == id:
			return todo

def replace_todo_by_id(todos, id, new_todo):
	for i in range(len(todos)):
		if todos[i]['id'] == id:
			todos[i] = new_todo
	return todos

def delete_todo_by_id(todos, id):
	for i in range(len(todos)):
		if todos[i]['id'] == id:
			del todos[i]
			return todos
	
def check_if_id_exist(todos, id):
	for todo in todos:
		if todo['id'] == id:
			return True
	return False

@app.route('/todos', methods=['GET', 'POST'])
def manage_data():
	todos = json_func.get_json_from_file(settings.file)
	if request.method == "POST":
		try:
			response_json_keys = list(request.json.keys())
		except AttributeError:
			return {"Error": "Empty request"}
		if len(request.json) == 0 or (set(settings.json_headers) != set(response_json_keys)):
			return {"Error": "Wrong format"}
		if check_if_id_exist(todos, request.json['id']):
			return {"Error": "Already exists"}

		add_request(request)
		return jsonify(json_func.get_json_from_file(settings.file))
	elif request.method == "GET":
		return jsonify(todos)
	else:
		return {"Error": "Unavailible"}



@app.route('/todos/<int:todo_id>/', methods=['GET', 'PUT', 'DELETE'])
def manage_one_todo(todo_id):
	todos = json_func.get_json_from_file(settings.file)
	if request.method == "GET":
		todo = get_todo_by_id(todos, todo_id)
		return jsonify(todo)
	elif request.method == "PUT":
		print(request.json)
		try:
			response_json_keys = list(request.json.keys())
		except AttributeError:
			return {"Error": "Empty request"}
		if len(request.json) == 0 or (set(settings.json_headers) != set(response_json_keys)):
			return {"Error": "Wrong format"}
		todos = replace_todo_by_id(todos, todo_id, request.json)
		json_func.serialize_json(todos, settings.file)
		return jsonify(todos)
	elif request.method == "DELETE":
		if not check_if_id_exist(todos, todo_id):
			return {"Error": "Doesn't exist"}
		todos = delete_todo_by_id(todos, todo_id)
		json_func.serialize_json(todos, settings.file)
		return jsonify(todos)

	else:
		return 'Unavailible'