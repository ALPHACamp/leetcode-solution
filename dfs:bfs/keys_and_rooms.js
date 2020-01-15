/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let len = rooms.length;
    let visited = new Array(len).fill(false);
    let stack = [];
    stack.push(0);
    visited[0] = true;
    while (len>0&&stack.length>0) {
        let curr = stack.pop();
        len--;
        for (let i=0; i<rooms[curr].length; i++) {
            if (!visited[rooms[curr][i]]) {
                visited[rooms[curr][i]] = true;
                stack.push(rooms[curr][i]);
            }
        }
    }
    return len==0;
};
