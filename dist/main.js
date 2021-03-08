(()=>{"use strict";const e=e=>{let t=document.createElement("div");return t.className="sidebar-project",e.append(t),{renderSideProjectTitle:e=>{let a=document.createElement("div");a.className="sidebar-project-title-container";let n=document.createElement("img");n.className="sidebar-project-icon",n.src="icons/box.svg";let c=document.createElement("h2");c.className="sidebar-project-title",c.innerHTML=e,a.append(n,c),t.append(a)},renderSideTask:e=>{let a=document.createElement("div");a.className="sidebar-project-task-container";let n=document.createElement("input");n.className="sidebar-task-input",n.type="checkbox";let c=document.createElement("label");c.className="sidebar-task-label",c.innerHTML=e.toString(),a.append(n,c),t.append(a)}}},t=e=>{let t=document.createElement("div");t.className="project";let a=document.createElement("div");return a.className="task-container",t.append(a),e.append(t),{renderProjectTitle:e=>{let n=document.createElement("div");n.className="project-title-container";let c=document.createElement("h3");c.className="project-title",c.innerHTML=e;let s=document.createElement("h3");s.className="project-date",s.innerHTML="Date";let r=document.createElement("img");r.className="project-date-filter",r.src="icons/chevrons-down.svg",n.append(c,s,r),t.prepend(n);let l=document.createElement("div");l.className="task";let d=document.createElement("div");d.id="task-creator-container";let i=document.createElement("img");i.id="task-creator-img",i.src="icons/plus-2.svg";let m=document.createElement("p");m.id="task-creator-text",m.innerHTML="Add task",d.append(i,m),l.append(d),a.append(l)},renderTask:(e,t,n,c)=>{let s=document.createElement("div");s.className="task";let r=document.createElement("input");r.className="task-checkbox-input",r.type="checkbox";let l=document.createElement("p");l.className="task-time",l.innerHTML=n;let d=document.createElement("p");d.className="task-name",d.innerHTML=e;let i=document.createElement("img");i.className="task-flag",i.src="regular"===c?"icons/flag.svg":"icons/red-flag.svg";let m=document.createElement("p");m.className="task-date",m.innerHTML=t;let o=document.createElement("img");o.className="task-edit-icon",o.src="icons/edit-3.svg";let p=document.createElement("img");p.className="task-trash-icon",p.src="icons/trash-2.svg";let u=document.createElement("div");u.id="notes-container",u.className="task-expanded",u.style.display="none";let k=document.createElement("h2");k.className="task-expanded-title",k.innerHTML="Notes:";let h=document.createElement("textarea");h.innerHTML="",u.append(k,h);let g=document.createElement("div");g.id="checkbox-container",g.className="task-expanded",g.style.display="none";let E=document.createElement("h2");E.className="task-expanded-title",E.innerHTML="List:";let T=document.createElement("div");T.className="checkbox";let v=document.createElement("input");v.className="check-input",v.type="checkbox";let b=document.createElement("label");b.innerHTML="Diamon Hands",T.append(v,b),g.append(E,T),s.append(r,l,d,i,m,o,p,u,g),a.append(s)}}},a=()=>({loadPage:()=>{const e=document.getElementById("content");(e=>{let t=document.createElement("div");t.id="navbar";let a=document.createElement("img");a.id="logo",a.src="icons/list.svg";let n=document.createElement("div");n.id="search-container";let c=document.createElement("img");c.id="search-icon",c.src="icons/search.svg";let s=document.createElement("input");s.id="searchbar",s.type="text",s.placeholder="Search..",n.append(c,s);let r=document.createElement("img");r.id="plus-icon",r.src="icons/plus.svg";let l=document.createElement("img");l.id="settings-icon",l.src="icons/settings.svg",t.append(a,n,r,l),e.append(t)})(e),(e=>{let t=document.createElement("div");t.id="sidebar";let a=document.createElement("div");a.id="user-data-section";let n=document.createElement("h1");n.className="sidebar-section-title",n.innerHTML="To-Do's";let c=document.createElement("img");c.id="sidebar-home-icon",c.src="icons/home.svg";let s=document.createElement("h2");s.id="sidebar-title-home",s.className="user-titles",s.innerHTML="Home";let r=document.createElement("p");r.id="sidebar-value-home",r.innerHTML="0";let l=document.createElement("img");l.id="sidebar-all-icon",l.src="icons/calendar.svg";let d=document.createElement("h2");d.id="sidebar-title-all",d.className="user-titles",d.innerHTML="All";let i=document.createElement("p");i.id="sidebar-value-all",i.innerHTML="0";let m=document.createElement("img");m.id="sidebar-trash-icon",m.src="icons/trash.svg";let o=document.createElement("h2");o.id="sidebar-title-trash",o.className="user-titles",o.innerHTML="Trash";let p=document.createElement("p");p.id="sidebar-value-trash",p.innerHTML="0",a.append(n,c,s,r,l,d,i,m,o,p);let u=document.createElement("img");u.id="sidebar-section-chevron-icon",u.src="icons/chevron-right.svg";let k=document.createElement("h1");k.className="sidebar-section-title",k.innerHTML="Projects";let h=document.createElement("img");h.id="sidebar-section-plus-icon",h.src="icons/plus-2.svg";let g=document.createElement("div");g.id="sidebar-projects-section";let E=document.createElement("p");E.innerHTML="Made by Thomas Veit";let T=document.createElement("img");T.id="github-logo",T.src="icons/github.svg",t.append(a,u,k,h,g,E,T),e.append(t)})(e),(e=>{let t=document.createElement("div");t.id="project-display-container",e.append(t)})(e)},sideProjects:(t,a)=>{for(let n=0;n<t.length;n++){let c=e(a);c.renderSideProjectTitle(t[n].name);for(let e=0;e<t[n].taskList.length;e++){let a=t[n].taskList[e];c.renderSideTask(a.name)}}},selectedProject:(e,a,n)=>{n.innerHTML="";let c=t(n);c.renderProjectTitle(a[e].name);for(let t=0;t<a[e].taskList.length;t++){let n=a[e].taskList[t];c.renderTask(n.name,n.date,n.time,n.priority)}},allProjects:(e,a)=>{a.innerHTML="";for(let n=0;n<e.length;n++){let c=t(a);c.renderProjectTitle(e[n].name);for(let t=0;t<e[n].taskList.length;t++){let a=e[n].taskList[t];c.renderTask(a.name,a.date,a.time,a.priority)}}},renderAll:(a,n,c)=>{for(let s=0;s<a.length;s++){let r=e(n),l=t(c);r.renderSideProjectTitle(a[s].name),l.renderProjectTitle(a[s].name);for(let e=0;e<a[s].taskList.length;e++){let t=a[s].taskList[e];r.renderSideTask(t.name),l.renderTask(t.name,t.date,t.time,t.priority)}}}}),n=e=>{let t=[];return{name:e,taskList:t,task:(e,t,a,n)=>({name:e,time:t,date:a,priority:n,notes:"",checkbox:[]}),addTask:e=>t.push(e),findTaskIdx:e=>t.findIndex((t=>t.name===e)),deleteTask:e=>t.splice(e,1)}};(()=>{a().loadPage();const e=document.getElementById("sidebar-projects-section"),t=document.getElementById("project-display-container"),c=document.getElementsByClassName("sidebar-project-title");document.getElementById("sidebar-title-all");let s=[],r=n("Work"),l=r.task("Check Emails","09:00h","29/08/2021","high"),d=r.task("Send Emails","10:30h","29/08/2021","regular"),i=r.task("Create reports","14:00h","29/08/2021","high"),m=r.task("Open Tickets","16:00h","29/08/2021","regular");r.addTask(l),r.addTask(d),r.addTask(i),r.addTask(m),s.push(r);let o=n("Investing"),p=o.task("Tea Time","15:00h","29/08/2021"),u=o.task("Dinner","18:00h","29/08/2021");o.addTask(p),o.addTask(u),s.push(o);let k=n("Coding"),h=k.task("Study","19:00h","29/08/2021","regular"),g=k.task("Study MORE","20:30h","29/08/2021","high"),E=k.task("Stretch back","22:00h","29/08/2021","regular");k.addTask(h),k.addTask(g),k.addTask(E),s.push(k),a().sideProjects(s,e),a().allProjects(s,t),(()=>{let e=Array.from(c);for(let n=0;n<e.length;n++)e[n].addEventListener("click",(()=>{a().selectedProject(n,s,t)}))})()})()})();