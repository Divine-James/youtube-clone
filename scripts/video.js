window.onload = () => {
  // fetech data from LS
  let video = JSON.parse(localStorage.getItem("video")) || [];
  displayVideos(video);
};

let displayVideos = (data) => {
  if (!data) return;
  let iframe = document.querySelector("iframe");
  iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`;

  let title = document.querySelector("#title");
  title.innerText = data.snippet.title;

  let views = document.querySelector("#views");
  views.innerText = "8,129,747 views • Sep 19, 2022";
};
