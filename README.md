> # AITU3DRPS
Development of a route-planning system on a virtual 3D map.

&nbsp;

> ## Problem, target users, and expected outcomes

### Problem
Traditional static maps and text directions often fail to convey complex campus layouts, multiple floors, and exact entrances.
During onboarding, new students frequently struggle to locate lecture halls, dormitories, and essential facilities, leading to an unsatisfactory orientation experience.
And now that we have 3 campuses (Korkem, EXPO, and main one) onboarding got even harder.

### Target users
Primary target is first year students, with broader utility for everyone else navigating our campuses.

### Expected outcomes
Web-based application that provides an interactive 3D map of AITU campuses, dormitories, and essentialities allowing users to select locations, find routes, and visualize directions directly in the virtual environment.

&nbsp;

> ## My responsibilities as a diploma work author, and my supervisor
My name is Temirlan Sapargali, and I'm responsible for the entire development process of this diploma work, from initial planning and 3D modeling to programming, testing, and deployment.

My supervisor is Askar Khaimuldin.

&nbsp;

> ## Diploma work scope and current development status

### Scope
Developing a route-planning system on a virtual 3D map focused on AITU campuses and their facilities.
The system will allow users to navigate the virtual environment and find routes between selected locations.
> [!NOTE]
> Mapping the user's real-world location to the virtual 3D map is outside the scope of this diploma work.

### Current development status
A demo of the Main Campus indoor 3D map[^1] was created by me during the summer break.
This will serve as the starting point for further development of the route-planning system.

[^1]: https://github.com/fernoe1/threedaitumap

&nbsp;

> ## Selected technologies
Blender[^2] will be used for modeling campus buildings and indoor environments, while React Three Fiber[^3], built on top of Three.js[^4], will handle rendering and interaction with the virtual 3D map.
React[^5] and Zustand[^6] will be used to build the user interface and manage application state. Vite[^7] as the development server and build tool.

[^2]: https://www.blender.org
[^3]: https://github.com/pmndrs/react-three-fiber
[^4]: https://github.com/mrdoob/three.js
[^5]: https://github.com/react/react
[^6]: https://github.com/pmndrs/zustand
[^7]: https://github.com/vitejs/vite

&nbsp;

> ## YouTrack project and project documentation

> [!IMPORTANT]
> Make sure to login using the committee account to view other users.
>
> Username: committee
>
> Password: committee
### YouTrack project[^8]

### Project documentation[^9]

[^8]: https://aitu3drps.youtrack.cloud/projects/RPS
[^9]: https://github.com/fernoe1/AITU3DRPS/tree/main/doc

&nbsp;

> ## Setup, execution, and testing
### Setup
```
npm install
```

### Execution
```
npm run dev
```

### Testing
```
npm run build
npm run lint
npm run preview
```

&nbsp;
