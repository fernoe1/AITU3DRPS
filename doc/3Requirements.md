> # Initial Requirements and acceptance criteria

> ## Purpose
This document defines the initial functional and non-functional requirements for AITU3DRPS. Requirements may be refined with the diploma work supervisor as the prototype develops.

> ## Functional requirements

| ID | Requirement | Acceptance criteria |
|---|---|---|
| FR-01 | Display the virtual campus map | The application loads the selected 3D campus environment without a fatal error. |
| FR-02 | Navigate the 3D scene | The user can rotate, zoom, and pan the view using supported controls. |
| FR-03 | Represent selectable locations | The interface or map provides identifiable start and destination locations. |
| FR-04 | Select a start and destination | The user can select two valid locations and see the current selections. |
| FR-05 | Calculate a route | The system returns a connected path between reachable locations in the route graph. |
| FR-06 | Handle unreachable destinations | If no route exists, the system displays a clear message instead of a misleading route. |
| FR-07 | Visualize the route | The route is drawn or highlighted in the 3D scene and follows valid graph connections. |
| FR-08 | Show route information | The interface displays route distance; estimated travel time is shown if a walking-speed assumption is configured. |
| FR-09 | Recalculate after selection changes | Changing the start or destination updates the displayed route when the user requests or triggers recalculation. |
| FR-10 | Provide basic error handling | Missing or invalid selections do not crash the application. |

> ## Non-functional requirements

| ID | Requirement | Acceptance criteria |
|---|---|---|
| NFR-01 | Usability | A first-time test user can select a start and destination and request a route using the visible interface. |
| NFR-02 | Route correctness | For tested reachable pairs, every consecutive node in the result is connected by an edge in the graph. |
| NFR-03 | Distance correctness | Displayed distance equals the sum of the selected route's edge costs within the chosen rounding tolerance. |
| NFR-04 | Maintainability | Route data, pathfinding logic, and 3D presentation are separated into identifiable modules. |
| NFR-05 | Performance | The route calculation completes within a diploma work-defined target on the prepared test graph; record measured results rather than claiming an untested target. |
| NFR-06 | Compatibility | The prototype runs in a current desktop browser that supports WebGL. |
| NFR-07 | Scope control | The core route-planning flow works without GPS or real-world location mapping. |

> ## Out of scope
Real-world GPS positioning, mapping geographic coordinates into the virtual scene, live tracking, user accounts, and production deployment infrastructure are not required for the initial version.

> ## Acceptance test scenarios

| Test ID | Scenario | Expected result |
|---|---|---|
| AT-01 | Open the application | The virtual map and controls are visible. |
| AT-02 | Rotate, zoom, and pan | The camera view changes as expected. |
| AT-03 | Choose two connected locations | A route is calculated and displayed. |
| AT-04 | Choose a different destination | The route updates to match the new destination. |
| AT-05 | Choose an unreachable destination | The application explains that no route is available. |
| AT-06 | Check a route with known edge weights | The displayed route distance matches the expected sum. |
| AT-07 | Submit without valid selections | The application prompts the user to select valid locations. |
| AT-08 | Build the production version | The build completes successfully without compilation errors. |

> ## Initial definition of done
The core prototype is considered ready for evaluation when the map loads, a user can choose valid locations, a pathfinding algorithm returns a valid route where one exists, the route is visibly highlighted, distance is calculated from graph edge costs, and the main acceptance tests have been recorded.