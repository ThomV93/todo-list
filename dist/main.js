(()=>{"use strict";const e=e=>{let t=document.createElement("div");return t.className="sidebar-project",e.append(t),{renderSideProjectTitle:e=>{let n=document.createElement("div");n.className="sidebar-project-title-container";let a=document.createElement("img");a.className="sidebar-project-icon",a.src="icons/box.svg";let c=document.createElement("h2");c.className="sidebar-project-title",c.innerHTML=e,n.append(a,c),t.append(n)},renderSideTask:e=>{let n=document.createElement("div");n.className="sidebar-project-task-container";let a=document.createElement("input");a.className="sidebar-task-input",a.type="checkbox";let c=document.createElement("label");c.className="sidebar-task-label",c.innerHTML=e.toString(),n.append(a,c),t.append(n)}}},t=e=>{let t=document.createElement("div");t.className="project";let n=document.createElement("div");return n.className="task-container",t.append(n),e.append(t),{renderProjectTitle:e=>{let a=document.createElement("div");a.className="project-title-container";let c=document.createElement("h3");c.className="project-title",c.innerHTML=e;let d=document.createElement("h3");d.className="project-date",d.innerHTML="Date";let l=document.createElement("img");l.className="project-date-filter",l.src="icons/chevrons-down.svg",a.append(c,d,l),t.prepend(a);let r=document.createElement("div");r.className="task";let i=document.createElement("div");i.id="task-creator-container";let s=document.createElement("img");s.id="task-creator-img",s.src="icons/plus-2.svg";let m=document.createElement("p");m.id="task-creator-text",m.innerHTML="Add task",i.append(s,m),r.append(i),n.append(r)},renderTask:(e,t,a,c)=>{let d=document.createElement("div");d.className="task";let l=document.createElement("input");l.className="task-checkbox-input",l.type="checkbox";let r=document.createElement("p");r.className="task-time",r.innerHTML=a;let i=document.createElement("p");i.className="task-name",i.innerHTML=e;let s=document.createElement("img");s.className="task-flag",s.src="regular"===c?"icons/flag.svg":"icons/red-flag.svg";let m=document.createElement("p");m.className="task-date",m.innerHTML=t;let o=document.createElement("img");o.className="task-edit-icon",o.src="icons/edit-3.svg";let p=document.createElement("img");p.className="task-trash-icon",p.src="icons/trash-2.svg";let u=document.createElement("div");u.id="notes-container",u.className="task-expanded",u.style.display="none";let E=document.createElement("h2");E.className="task-expanded-title",E.innerHTML="Notes:";let g=document.createElement("textarea");g.innerHTML="",u.append(E,g);let k=document.createElement("div");k.id="checkbox-container",k.className="task-expanded",k.style.display="none";let h=document.createElement("h2");h.className="task-expanded-title",h.innerHTML="List:";let T=document.createElement("div");T.className="checkbox";let b=document.createElement("input");b.className="check-input",b.type="checkbox";let v=document.createElement("label");v.innerHTML="Diamon Hands",T.append(b,v),k.append(h,T),d.append(l,r,i,s,m,o,p,u,k),n.append(d)}}},n=()=>({loadPage:()=>{const e=document.getElementById("content");(e=>{let t=document.createElement("div");t.id="navbar";let n=document.createElement("img");n.id="logo",n.src="icons/list.svg";let a=document.createElement("div");a.id="search-container";let c=document.createElement("img");c.id="search-icon",c.src="icons/search.svg";let d=document.createElement("input");d.id="searchbar",d.type="text",d.placeholder="Search..",a.append(c,d);let l=document.createElement("img");l.id="plus-icon",l.src="icons/plus.svg";let r=document.createElement("img");r.id="settings-icon",r.src="icons/settings.svg",t.append(n,a,l,r),e.append(t)})(e),(e=>{let t=document.createElement("div");t.id="sidebar";let n=document.createElement("div");n.id="user-data-section";let a=document.createElement("h1");a.className="sidebar-section-title",a.innerHTML="To-Do's";let c=document.createElement("img");c.id="sidebar-home-icon",c.src="icons/home.svg";let d=document.createElement("h2");d.id="sidebar-title-home",d.className="user-titles",d.innerHTML="Home";let l=document.createElement("p");l.id="sidebar-value-home",l.innerHTML="0";let r=document.createElement("img");r.id="sidebar-all-icon",r.src="icons/calendar.svg";let i=document.createElement("h2");i.id="sidebar-title-all",i.className="user-titles",i.innerHTML="All";let s=document.createElement("p");s.id="sidebar-value-all",s.innerHTML="0";let m=document.createElement("img");m.id="sidebar-trash-icon",m.src="icons/trash.svg";let o=document.createElement("h2");o.id="sidebar-title-trash",o.className="user-titles",o.innerHTML="Trash";let p=document.createElement("p");p.id="sidebar-value-trash",p.innerHTML="0",n.append(a,c,d,l,r,i,s,m,o,p);let u=document.createElement("img");u.id="sidebar-section-chevron-icon",u.src="icons/chevron-right.svg";let E=document.createElement("h1");E.className="sidebar-section-title",E.innerHTML="Projects";let g=document.createElement("img");g.id="sidebar-section-plus-icon",g.src="icons/plus-2.svg";let k=document.createElement("div");k.id="sidebar-projects-section";let h=document.createElement("p");h.innerHTML="Made by Thomas Veit";let T=document.createElement("img");T.id="github-logo",T.src="icons/github.svg",t.append(n,u,E,g,k,h,T),e.append(t)})(e),(e=>{let t=document.createElement("div");t.id="project-display-container",e.append(t)})(e)},sideProjects:(t,n)=>{for(let a=0;a<t.length;a++){let c=e(n);c.renderSideProjectTitle(t[a].name);for(let e=0;e<t[a].taskList.length;e++){let n=t[a].taskList[e];c.renderSideTask(n.name)}}},selectedProject:(e,n,a)=>{a.innerHTML="";let c=t(a);c.renderProjectTitle(n[e].name);for(let t=0;t<n[e].taskList.length;t++){let a=n[e].taskList[t];c.renderTask(a.name,a.date,a.time,a.priority)}},allProjects:(e,n)=>{n.innerHTML="";for(let a=0;a<e.length;a++){let c=t(n);c.renderProjectTitle(e[a].name);for(let t=0;t<e[a].taskList.length;t++){let n=e[a].taskList[t];c.renderTask(n.name,n.date,n.time,n.priority)}}},renderAll:(n,a,c)=>{for(let d=0;d<n.length;d++){let l=e(a),r=t(c);l.renderSideProjectTitle(n[d].name),r.renderProjectTitle(n[d].name);for(let e=0;e<n[d].taskList.length;e++){let t=n[d].taskList[e];l.renderSideTask(t.name),r.renderTask(t.name,t.date,t.time,t.priority)}}}}),a=e=>{let t=[];return{name:e,taskList:t,task:(e,t,n,a)=>({name:e,time:t,date:n,priority:a,notes:"",checkbox:[]}),addTask:e=>t.push(e),findTaskIdx:e=>t.findIndex((t=>t.name===e)),deleteTask:e=>t.splice(e,1)}};(()=>{n().loadPage();const e=document.getElementById("sidebar-projects-section"),t=document.getElementById("project-display-container"),c=document.getElementsByClassName("sidebar-project-title");document.getElementById("sidebar-title-all");let d=[],l=a("Work"),r=l.task("Check Emails","09:00h","29/08/2021","high"),i=l.task("Send Emails","10:30h","29/08/2021","regular"),s=l.task("Create reports","14:00h","29/08/2021","high"),m=l.task("Open Tickets","16:00h","29/08/2021","regular");l.addTask(r),l.addTask(i),l.addTask(s),l.addTask(m),d.push(l);let o=a("Investing"),p=o.task("Tea Time","15:00h","29/08/2021"),u=o.task("Dinner","18:00h","29/08/2021");o.addTask(p),o.addTask(u),d.push(o);let E=a("Coding"),g=E.task("Study","19:00h","29/08/2021","regular"),k=E.task("Study MORE","20:30h","29/08/2021","high"),h=E.task("Stretch back","22:00h","29/08/2021","regular");E.addTask(g),E.addTask(k),E.addTask(h),d.push(E),n().sideProjects(d,e),n().allProjects(d,t),(()=>{let e=Array.from(c);for(let a=0;a<e.length;a++)e[a].addEventListener("click",(()=>{n().selectedProject(a,d,t)}))})(),(e=>{let t=document.createElement("div");t.id="editor-container";let n=document.createElement("div");n.id="task-editor-container";let a=document.createElement("div");a.id="editor-title-container";let c=document.createElement("h2");c.id="editor-title",c.innerHTML="New Task",a.append(c);let d=document.createElement("img");d.id="editor-flag",d.src="icons/red-flag.svg";let l=document.createElement("div");l.id="editor-name-container",l.className="editor-input-container";let r=document.createElement("label");r.id="editor-label-name",r.innerHTML="Title:";let i=document.createElement("input");i.id="editor-name",i.type="text",l.append(r,i);let s=document.createElement("div");s.id="editor-time-container",s.className="editor-input-container";let m=document.createElement("label");m.id="editor-label-time",m.innerHTML="Time:";let o=document.createElement("input");o.id="editor-time",o.type="time",s.append(m,o);let p=document.createElement("div");p.id="editor-date-container",p.className="editor-input-container";let u=document.createElement("label");u.id="editor-label-date",u.innerHTML="Date:";let E=document.createElement("input");E.id="editor-date",E.type="date",p.append(u,E);let g=document.createElement("div");g.id="editor-notes-container",g.className="editor-input-container";let k=document.createElement("label");k.id="editor-label-notes",k.innerHTML="Notes:";let h=document.createElement("textarea");h.id="editor-notes",g.append(k,h);let T=document.createElement("button");T.id="editor-cancel-btn",T.type="button",T.innerHTML="Cancel";let b=document.createElement("button");b.id="editor-save-btn",b.type="button",b.innerHTML="Save",n.append(a,d,l,s,p,g,T,b),t.append(n),e.prepend(t)})(document.body)})()})();