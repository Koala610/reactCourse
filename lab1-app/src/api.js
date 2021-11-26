import {parse_json} from './utils/utils'

const url = 'http://localhost:5000/todos'

export async function getTodosFromAPI(){
	const response = await fetch(url);
	return await response.json();
}

export async function deleteTodo(id){
	const response = await fetch(url+"/"+id, {method: "DELETE"})
	const data = await response.json();
	return data;
}

export async function addTodo(data){
	const response = await fetch(url, {
		method: "POST",
		headers:{
    		'Content-Type':'application/json'
    	},
    	body: JSON.stringify(data)
    });
	const json_data = await response.json();

	return json_data;
}

export async function changeTodo(id, data){
	const response = await fetch(url+"/"+id, {
		method: "PUT",
		headers:{
    		'Content-Type':'application/json'
    	},
    	body: JSON.stringify(data)
    });
	const json_data = await response.json();

	return json_data;
}

export function get_todos(){
    getTodosFromAPI()
    .then(res => {
      return parse_json(res)
    })
  }