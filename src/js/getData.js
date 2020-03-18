export default function getData(callback){
  $.ajax({
    url: 'mock/data.json',
    type: 'GET',
    dataType: 'json',
    success: callback
  })
}