> # Verification and evaluation plan

> ## Test environment
Record the operating system, browser and version, device specifications, display resolution, and test build version when running the final tests. The application is expected to run in a modern desktop browser with WebGL support.

> ## Test cases

| ID | Test | Procedure | Expected result | Evidence to record |
|---|---|---|---|---|
| VT-01 | Scene loading | Open the application | Campus scene loads without a fatal error | Screenshot and console result |
| VT-02 | Camera controls | Rotate, pan, and zoom | Camera responds correctly | Short recording or observation |
| VT-03 | Location selection | Select valid start and destination | Both selections are shown correctly | Screenshot |
| VT-04 | Route calculation | Calculate a route for a known connected pair | A valid ordered path is returned | Selected nodes and route output |
| VT-05 | Route connectivity | Inspect every consecutive pair in the returned path | Each pair is connected in the graph | Automated test output or checklist |
| VT-06 | Distance calculation | Sum edge costs for a known route | Displayed distance matches the sum within rounding tolerance | Calculation and displayed value |
| VT-07 | No route available | Test nodes in disconnected graph components | A clear no-route message appears | Screenshot |
| VT-08 | Recalculation | Change destination and calculate again | Route and summary update | Before/after screenshots |
| VT-09 | Build and lint | Run production build and linter | Commands finish without errors, or issues are documented | Terminal output |
| VT-10 | Basic usability | Ask a small number of representative users to find a specified location, if available | Record whether users complete the task and what confuses them | Observations and feedback |

> ## Algorithm evaluation
If both A* and Dijkstra are implemented, test them on the same graph and with the same start-destination pairs. Record:

Whether each algorithm finds a route when one exists.
Whether the route is valid and has the expected total cost.
Route cost and length.
Execution time, measured consistently.
Number of nodes explored, if the implementation exposes this metric.

Use repeated measurements where practical and report the test setup. Do not claim that one algorithm is faster or better until results support that conclusion. A* requires a suitable heuristic; for distance-based routing, the heuristic should not overestimate the remaining route cost if optimality is required.

> ## Evaluation metrics
**Route validity:** percentage of tested routes whose consecutive nodes are connected by graph edges.

**Route cost correctness:** agreement between the displayed cost and the sum of edge weights.

**Success rate:** percentage of test cases that produce the expected outcome.

**Execution time:** time required to calculate a route on the test graph.

**Task completion:** whether a test user can select locations and identify the displayed route.
