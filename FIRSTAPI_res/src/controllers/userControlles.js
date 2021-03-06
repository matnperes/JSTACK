const users = require('../mocks/users.js')

module.exports = {
  listUsers(req, res){
    const { order } = req.query;
    const sortedUsers = users.sort((a,b)=>{
      if(order === 'desc'){
        return a.id < b.id ? 1 : -1;
      }

      return a.id >b.id ? 1 : -1
    })
    res.writeHead(200, { 'content-type': 'application.json' });
    res.end(JSON.stringify(users))
  },

  getUserById(req, res){
    const { id } = req.params;

    const user = users.find((user) => user.id == Number(id));

    if(!user){
      return res.send(400, {error: 'User not found'})
    }
      res.send(200,user)
  }
};