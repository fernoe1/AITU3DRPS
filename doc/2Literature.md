> # Literature review and technology comparison

> ## Literature review matrix

This review examines literature on campus and indoor wayfinding, 3D web-based campus visualization, route-planning algorithms, and interactive web application development. The selected sources support the design of AITU3DRPS, a web-based virtual 3D route-planning system for Astana IT University.

The review includes 14 sources, of which 10 are scientific journal articles, conference papers, or peer-reviewed reviews. Recent publications from 2021–2026 form the core evidence base, while foundational routing and wayfinding works are retained where directly relevant.

| No. | Source | Type and year | Main focus | Key findings relevant to AITU3DRPS | Critical assessment and intended use |
|---:|---|---|---|---|---|
| 1 | Ludwig et al., “URWalking: Indoor Navigation for Research and Daily Use” [1] | Scientific journal article, 2023 | University-wide indoor navigation system | Presents a practical indoor navigation system for the University of Regensburg. It uses a graph-based routing model, supports navigation across many buildings and rooms, and applies an A*-based approach to indoor routing. | Highly relevant benchmark for AITU3DRPS. Supports the use of selectable rooms, entrances, corridors, and a routing graph instead of GPS-based tracking. Its large-scale implementation also shows the need to separate 3D visualization, route data, and routing logic. |
| 2 | Quintero Gamez, Diaz Celis, and Cruz-Roa, “Adaptation of a 3D Geographic Information System on the Web (3D WebGIS) for the Visualization of Buildings, Objects, and Navigation Routes on the Campus Barcelona of the Universidad de Los Llanos” [2] | Scientific conference paper, 2023 | Web-based 3D campus GIS and navigation | Implements 49 3D campus building models in a browser-based GIS environment and integrates campus routing functionality. | Directly comparable to AITU3DRPS because it combines 3D building visualization with route navigation. However, it uses a GIS-oriented technology stack, whereas AITU3DRPS uses React, Three.js, and React Three Fiber for a lighter interactive prototype. |
| 3 | Haque, Dasgupta, and Rahman, “Grid2Guide: A* Enabled Small Language Model for Indoor Navigation” [3] | Scientific preprint, 2025 | A* path planning and indoor route instructions | Uses an occupancy grid and A* search to calculate an optimal indoor path, then converts the result into human-readable navigation instructions. | Supports the selection of A* as the main route-calculation algorithm. AITU3DRPS can adopt the separation between path computation and route explanation, while excluding the language-model component to keep the diploma scope realistic. |
| 4 | Tahir and Krogstie, “Impact of Navigation Aid and Spatial Ability Skills on Wayfinding Performance and Workload in Indoor-Outdoor Campus Navigation” [4] | Scientific journal article, 2023 | Campus wayfinding, navigation aids, and user workload | Investigates how navigation aids affect wayfinding performance and cognitive workload in campus environments. | Useful for the evaluation design. AITU3DRPS should assess not only whether routes are generated correctly, but also whether users can understand and follow them without excessive cognitive effort. |
| 5 | Prandi et al., “Accessible Wayfinding and Navigation: A Systematic Mapping Study” [5] | Scientific review, 2021/2023 | Accessible indoor and outdoor navigation | Reviews 111 studies and identifies localization accuracy, heterogeneous user needs, and large-scale deployment as persistent challenges in navigation systems. | Important for defining diploma work boundaries. It supports excluding live GPS and indoor positioning from the first prototype while encouraging accessible labels, clear entrances, and simple route information. |
| 6 | Qiu, Mostafavi, and Kalantari, “Use of Augmented Reality in Human Wayfinding: A Systematic Review” [6] | Scientific review, 2023 | AR navigation, maps, and route visualization | Finds that map interfaces and path visualization can improve wayfinding performance. Three-dimensional layout maps may reduce task completion time, but overly complex interfaces can reduce usability. | Strong justification for 3D route visualization, but also a warning against visual clutter. AITU3DRPS should provide a clear camera view, route line, destination marker, labels, and minimal nonessential visual elements. |
| 7 | Tünger et al., “Using Quick Response (QR) Codes as an Indoor Wayfinding Tool: Benefits and Limitations” [7] | Scientific journal article, 2022/2023 | Low-cost indoor wayfinding in a university building | In an experiment with 38 participants, QR-based guidance increased task completion time but received positive user evaluations and may reduce anxiety in complex buildings. | Relevant to the onboarding use case. It suggests that AITU3DRPS should prioritize orientation, entrance identification, and reassurance rather than claiming to provide the fastest possible route. |
| 8 | Gryzun, Shcherbakov, and Bida, “Development of the Information System for Navigation in Modern University Campus” [8] | Scientific conference paper | University campus navigation information system | Implements interactive maps, floor switching, route search, and route visualization. User feedback indicated positive perceptions of interface quality and loading speed. | Closest functional analogue to AITU3DRPS. Supports the inclusion of searchable locations, campus-area navigation, route calculation, and route display. Also supports collecting simple user feedback during prototype testing. |
| 9 | “Indoor Navigation Network Models: A Comparative Review” [9] | Scientific journal article, 2022 | Indoor navigation network modelling | Compares medial-axis-transform-based and visibility-graph-based navigation networks. Visibility-based models can generate shorter routes with fewer turns and may better reflect human spatial perception. | Methodologically important for route-graph design. AITU3DRPS should connect rooms, doors, corridors, stairs, and entrances through meaningful walkable edges rather than drawing direct lines between room centers. |
| 10 | “AR Indoor Navigation” [10] | Scientific journal article, 2024 | 3D modelling, pathfinding, and navigation evaluation | Develops an indoor navigation application using Blender for 3D modelling and A* for optimal pathfinding. The system is evaluated through accuracy, usability, efficiency, reliability, and scalability. | Validates the proposed Blender-to-web-3D workflow. Its evaluation categories can be adapted for AITU3DRPS functional testing, particularly route correctness, usability, performance, and reliability. |
| 11 | “A Review: Current Trend of Immersive Technologies for Indoor Navigation” [11] | Scientific review, 2024 | AR, VR, MR, and indoor navigation algorithms | Reviews 75 articles and concludes that immersive representations can support navigation in complex indoor spaces, while shortest-path algorithms remain central to navigation systems. | Provides broad context for the use of 3D visualization. It also highlights that many advanced systems depend on positioning infrastructure, which AITU3DRPS intentionally excludes in its initial prototype. |
| 12 | Esri, “Better Wayfinding on Campus with ArcGIS Indoors” [12] | Technical case study, 2022 | Campus indoor mapping and routing | Describes university projects using indoor maps, routable networks, 3D buildings, accessible routes, and emergency paths. | Practical design reference. Reinforces the need for a routable indoor network and demonstrates that accessibility, entrances, and multiple building formats are common requirements in campus navigation systems. |
| 13 | “Integration of Interactive 3D Models into React-Based Application” [13] | Bachelor’s thesis / technical study, 2024 | React integration with 3D web libraries | Examines integration of interactive 3D models into React applications using Three.js, React Three Fiber, Spline, and Babylon.js. | Supports the chosen React, Three.js, and React Three Fiber technology stack. It should be used mainly as technical implementation evidence, not as proof of navigation effectiveness. |
| 14 | “Implementación de gráficos 3D en la web con Three.js y React Three Fiber a través del framework React.js” [14] | Bachelor’s thesis / technical study, 2025 | React, Three.js, and React Three Fiber development | Demonstrates the transition from a 2D web map to an interactive 3D web interface using React Three Fiber. | Useful technical precedent for rendering a 3D campus scene inside a React application. Its limitation is that it does not evaluate route planning or real campus users. |

> ## Critical synthesis

> ### Campus and indoor wayfinding

University buildings are frequently difficult navigation environments because users must identify their current location, destination, and the route between them. URWalking demonstrates that a university can provide practical indoor navigation without requiring users to share live location data, which aligns closely with the planned scope of AITU3DRPS [1].

Existing systems vary substantially in scale. URWalking covers thousands of rooms and multiple buildings, whereas AITU3DRPS begins with one selected AITU campus area [1]. This narrower scope is appropriate for a diploma prototype, provided the system is designed so that additional campuses and rooms can be added later.

> ### 3D visualization

Research on navigation interfaces indicates that 3D representations can improve spatial understanding and reduce wayfinding time in some indoor contexts, especially when combined with clear paths and landmarks [6]. This supports the central premise of AITU3DRPS: a virtual 3D campus may be easier to understand than a static map or text-based directions.

However, the literature does not suggest that more visual detail always improves usability. Complex or cluttered displays can create usability problems, while simple and streamlined presentations tend to receive better user ratings [6]. Therefore, AITU3DRPS should use 3D visualization to communicate building structure, entrances, rooms, and route direction rather than to create a visually dense simulation.

> ### Route planning

A* is widely used in indoor navigation systems because it combines actual path cost with a heuristic estimate of remaining distance, enabling efficient shortest-path search [3], [10]. For AITU3DRPS, rooms, doors, corridors, stairs, and entrances can be represented as graph nodes, while permitted pedestrian connections form graph edges.

The quality of the resulting route depends strongly on how the indoor network is constructed. Comparative research on indoor navigation networks shows that corridor-aware and visibility-based models can better represent human movement than simple geometric connections [9]. AITU3DRPS should therefore model routes around real walkable paths and door connections.

> ### Technology stack and comparison

React Three Fiber is suitable for AITU3DRPS because it provides a declarative React interface over Three.js, allowing 3D objects, cameras, lighting, and user interactions to be managed as React components [13], [14]. React and Vite also support rapid development of interactive single-page web applications.

The principal technical risk is performance. Detailed Blender models may increase loading time and reduce browser interactivity. The diploma work should therefore use optimized low-poly models, compressed textures, instancing where appropriate, and lazy loading for nonessential assets.

| Technology | Role | Reason for selection / trade-off |
|---|---|---|
| Blender | 3D modeling and asset preparation | Provides control over campus geometry and export to web-friendly formats such as glTF/GLB; chosen over SketchUp (limited free export, no glTF) and Maya (heavier, costlier) for its free, open-source licensing and direct glTF/GLB export |
| Three.js | Browser-based 3D rendering | Established JavaScript 3D library; gives direct access to scene, camera, materials, and geometry; chosen over Babylon.js (more built-in features but ~1.8 MB full core vs ~185 kB) and PlayCanvas (smaller ecosystem, editor-centric) for its lightweight footprint and fine-grained control |
| React Three Fiber | React renderer for Three.js | Integrates 3D scene components into a React application; chosen over vanilla Three.js (manual scene lifecycle management) and TroisJS (Vue-oriented) because it lets the 3D scene share React state and component patterns with the UI |
| React | User interface | Supports location search, route controls, and application state; chosen over Vue 3 and Svelte 5 for its larger ecosystem and, critically, React Three Fiber's tight integration with the 3D stack |
| TypeScript | Application language | Adds static type checking to route data and UI logic; chosen over plain JavaScript for compile-time safety on graph/route structures and clearer contracts as the app grows |
| Vite | Development and build tooling | Provides a fast development server and production build; chosen over Webpack (mature but much slower cold starts and HMR) and Parcel (zero-config but less optimization control) for fast iteration and a good speed/configurability balance |
| Graph algorithms (A* / Dijkstra) | Route calculation | Well-understood algorithms suitable for weighted pathfinding and comparative evaluation; chosen over BFS/DFS (unweighted only) and Bellman-Ford (handles negative weights the campus graph doesn't need) |

> ### Evaluation gap

Related systems are commonly evaluated through route correctness, task completion, user satisfaction, perceived ease of use, performance, and reliability [4], [8], [10]. AITU3DRPS should adopt a lightweight version of this approach, measuring route correctness, route-generation time, 3D scene loading time, task success rate, and user feedback.

A limitation of the literature is that many strong sources focus on augmented reality, indoor positioning, or GIS platforms, whereas AITU3DRPS excludes live positioning [5], [6], [11]. The diploma work should therefore position AITU3DRPS as a virtual pre-visit and orientation tool, not as a real-time turn-by-turn navigation system.

> ## References

[1] B. Ludwig, G. Donabauer, D. Ramsauer, and K. Al Subari, “URWalking: Indoor navigation for research and daily use,” *Künstliche Intelligenz*, vol. 37, no. 1, pp. 83–90, Mar. 2023, doi: 10.1007/s13218-022-00795-1.

[2] J. Quintero Gamez, C. A. Diaz Celis, and A. A. Cruz-Roa, “Adaptation of a 3D geographic information system on the web (3D WebGIS) for the visualization of buildings, objects, and navigation routes on the campus Barcelona of the Universidad de Los Llanos,” in *Proc. 11th Int. Conf. Software Engineering Research and Innovation (CONISOFT)*, León, Mexico, 2023, pp. 213–222, doi: 10.1109/CONISOFT58849.2023.00035.

[3] M. Haque, S. Dasgupta, and M. Rahman, “Grid2Guide: A* enabled small language model for indoor navigation,” 2025, arXiv:2508.08100. [Online]. Available: https://arxiv.org/abs/2508.08100

[4] A. Tahir and J. Krogstie, “Impact of navigation aid and spatial ability skills on wayfinding performance and workload in indoor-outdoor campus navigation,” *Applied Sciences*, vol. 13, no. 4, 2023.

[5] C. Prandi et al., “Accessible wayfinding and navigation: A systematic mapping study,” *Universal Access in the Information Society*, vol. 22, pp. 185–212, 2023, doi: 10.1007/s10209-021-00843-x.

[6] Z. Qiu, A. Mostafavi, and S. Kalantari, “Use of augmented reality in human wayfinding: A systematic review,” 2023, arXiv:2311.11923. [Online]. Available: https://arxiv.org/abs/2311.11923

[7] A. Tünger et al., “Using quick response (QR) codes as an indoor wayfinding tool: Benefits and limitations,” *METU Journal of the Faculty of Architecture*, vol. 39, no. 2, pp. 201–220, 2022.

[8] L. E. Gryzun, O. V. Shcherbakov, and B. O. Bida, “Development of the information system for navigation in modern university campus,” in *Proc. 16th International Conference on ICT in Education, Research and Industrial Applications*, 2023, doi: 10.55056/cte.566.

[9] “Indoor navigation network models: A comparative review,” *Journal of Geodesy and Geoinformation*, 2022, doi: 10.9733/JGG.2022R0008.T.

[10] “AR indoor navigation,” *International Journal of Frontiers in Research*, 2024. [Online]. Available: https://ojs.as-pub.com/index.php/IFR/article/view/7859

[11] “A review: Current trend of immersive technologies for indoor navigation,” *Pertanika Journal of Science and Technology*, vol. 32, no. 2, 2024.

[12] Esri, “Better wayfinding on campus with ArcGIS Indoors,” Esri, 2022. [Online]. Available: https://www.esri.com/about/newsroom/app/uploads/2022/05/wayfinding.pdf

[13] “Integration of interactive 3D models into React-based application,” Bachelor’s thesis, Haaga-Helia University of Applied Sciences, 2024. [Online]. Available: https://www.theseus.fi/handle/10024/873764

[14] “Implementación de gráficos 3D en la web con Three.js y React Three Fiber a través del framework React.js,” Bachelor’s thesis, Universidad de Alcalá, 2025. [Online]. Available: https://ebuah.uah.es/dspace/handle/10017/67159