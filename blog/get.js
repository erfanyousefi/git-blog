//get blog list
function getAll(){
    return [];
}

//find and return one blog
function getOne(id) {
    return getAll().find(blog => blog.id == id);
}