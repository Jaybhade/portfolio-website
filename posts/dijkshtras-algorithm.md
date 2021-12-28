---
title: "Dijkstra's Algorithm"
date: '2021-12-28'
excerpt: Single-Source Shortest path finding algorithm for graphs.
---

- Works for weighted graph.
- This is a **single-source shortest path** algorithm i.e. we are given a starting vertex, to all other vertices, and output the shortest path themselves.
- Can use for both directed and undirected graphs.
- Greedy Algorithm.
- Dijkstra doesn’t work for graphs with negative weight edges.

Dijkstra's Algorithm is based on the **principle of relaxation**, in which more accurate values gradually replace an approximation to the correct distance until the shortest distance is reached.

### Algorithm :

1. Initialize dist array, an array of distances from the source node *s* to each node in the graph, initialized the following way: dist(s) = 0; and for all other nodes v, dist(*v*) = ∞.
2. Then initialize a set s with pair 0 i.e. distance of source from source , and source.
3. Then while set s is not empty :
    1. Get the first element from set and remove it from set.
    2. Now iterate over the neighbours of that node.
    3. Check if distance till now and current edge length is less than dist[nbr].
    4. if yes then remove that element and enter new one with updated value i.e. distance till now + current edge length. Else do nothing.
4. dist array gets updated with shorted path from source to all the respective elements.

```cpp
#include <bits/stdc++.h>
using namespace std;

class Graph {
  int V;
  list<pair<int, int>> *l;

 public:
  Graph(int v) {
    V = v;
	  l = new list<pair<int, int>>[v];
  }

  void addEdge(int u, int v, int wt, bool undir = true) {
    l[u].push_back({wt, v});
    if (undir) l[v].push_back({wt, u});
  }

  int dijkstra(int src, int dest) {
    // data structures
    vector<int> dist(V, INT_MAX);
    set<pair<int, int>> s;

    // 1. Init
    dist[src] = 0;
    s.insert({0, src});  // dist, src

    while (!s.empty()) {
      auto it = s.begin();

      int node = it->second;
      int distTillNow = it->first;
      s.erase(it);  // pop

      // iterate over the neighbours of node
      for (auto nbrPair : l[node]) {
        int nbr = nbrPair.second;
        int currentEdgeLen = nbrPair.first;

        if (distTillNow + currentEdgeLen < dist[nbr]) {
          // remove if such a pair already exists
          auto f = s.find({dist[nbr], nbr});
          if (f != s.end()) s.erase(f);

          // insert updated value
          dist[nbr] = distTillNow + currentEdgeLen;
          s.insert({dist[nbr], nbr});
        }
      }
    }

    // single source shortest distance to all other nodes
    for (int i = 0; i < V; i++) {
      cout << "Node " << i << " Dist " << dist[i] << endl;
    }

    return dist[dest];
  }
  
};

int main() {
  Graph g(5);
  g.addEdge(0, 1, 1);
  g.addEdge(1, 2, 2);
  g.addEdge(0, 2, 4);
  g.addEdge(0, 3, 7);
  g.addEdge(3, 2, 2);
  g.addEdge(3, 4, 3);

  cout << g.dijkstra(0, 4);
  return 0;
}
```

[https://cp-algorithms.com/graph/dijkstra.html](https://cp-algorithms.com/graph/dijkstra.html)