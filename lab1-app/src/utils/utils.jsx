export function parse_json(data){
    data = data.map(item => {
      return {
        id: item.id,
        name: item.title,
        text: item.description,
        checked: item.isDone

      }
    })
    return data
  }

export function parse_to_api_format(data){
  return {
    id: data.id,
    title: data.name,
    description: data.text,
    isDone: data.checked
  }
}


export function parse_todo(item){
  return {
    id: item.id,
    name: item.title,
    text: item.description,
    checked: item.isDone
  }
}