class Solution {
    // Function to detect cycle in an undirected graph.
    method(v, visited, parent, adj) {
    visited[v] = true;
    for (let n of adj[v]) {
      if (!visited[n]) {
        if(this.method(n, visited, v, adj))
            return true;
      }else{
          if(n!=parent){
              return true;
          }
      }
    }
    return false;
  }

    isCycle(V, adj) {
        // code here
        let visited = new Array(V);
        visited.fill(false);
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        let bool = this.method(i, visited, -1, adj);
        if(bool){
            return true;
        }
      }
    }
    return false;
    }
}