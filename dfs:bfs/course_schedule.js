/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const len = prerequisites.length;
    let visited = new Array(len).fill(false);
    let graph = {};
    for (let i=0; i<len; i++) {
        let course = prerequisites[i][0];
        let prereq = prerequisites[i][1];
        if (prereq in graph) {
            graph[prereq].push(course);
        }
        else {
            graph[prereq] = [course];
        }
    }
    var hasCycle = function(vertex) {
        if (visited[vertex]) {
            return true;
        }
        visited[vertex] = true;
        if (vertex in graph) {
            let edges = graph[vertex];
            for (let i=0; i<edges.length; i++) {
                let e = edges[i];
                if (hasCycle(e)) {
                    return true;
                }
            }
        }
        visited[vertex] = false;
        return false;
    }
    for (let vertex in graph) {
        if (hasCycle(vertex)) {
            return false;
        }
    }
    return true;
};
