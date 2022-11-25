class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v).fill([]);
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  method(v, visited) {
    console.log(v);
    visited[v] = true;
    for (let n of this.adj[v]) {
      if (!visited[n]) {
        this.method(n, visited, v);
      }
    }
  }

  dfs() {
      console.log('inside dfs, this.v is ', this.V);
    let visited = new Array(this.V);
    visited.fill(false);
    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.method(i, visited);
      }
    }
  }
}

var g = new Graph(6);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(1, 2);
g.addEdge(2, 4);
g.addEdge(4, 5);

g.dfs();