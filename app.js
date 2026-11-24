const board = document.getElementById("board");
const dialog = document.getElementById("detail");

// posterUrl : 포스터 경로와 크기 ⇒ TMDB 이미지 주소
function posterUrl(path, size) {
  return "https://image.tmdb.org/t/p/" + size + path;
}

// sortBy : 배열, 정렬 기준, 내림차순 여부 ⇒ 정렬한 새 배열
function sortBy(list, key, desc) {
  const sign = desc ? -1 : 1;

  return [...list].sort((a, b) => {
    if (typeof a[key] === "string") {
      return a[key].localeCompare(b[key]) * sign;
    }

    return (a[key] - b[key]) * sign;
  });
}

// search : 영화 배열과 검색어 ⇒ 제목에 검색어가 포함된 배열
function search(list, keyword) {
  const searchWord = keyword.trim().toLowerCase();

  return list.filter(movie =>
    movie.title.toLowerCase().includes(searchWord)
  );
}

// renderCards : 영화 배열 ⇒ 카드와 결과 개수, 찜 개수, 빈 결과 상태 표시
function renderCards(list) {
  board.innerHTML = "";

  for (const m of list) {
    const card = document.createElement("article");

    card.classList.add("card");
    card.setAttribute("data-type", m.type);
    card.setAttribute("data-title", m.title);

    if (m.rating >= 8) {
      card.classList.add("hot");
    }

    let poster;

    if (m.poster === null) {
      card.classList.add("no-poster");
      poster = `<div class="poster-fallback">${m.title[0]}</div>`;
    } else {
      poster = `
        <img
          class="poster"
          src="${posterUrl(m.poster, "w342")}"
          alt="${m.title} 포스터"
        >
      `;
    }

    card.innerHTML = `
      ${poster}
      ${m.type === "boxoffice" ? `<span class="rank">${m.rank}</span>` : ""}
      <span class="badge">${m.rating}</span>

      <div class="info">
        <h3>${m.title}</h3>
        <p class="year">${m.year}</p>
        <button
          class="${liked.includes(m.title) ? "like liked" : "like"}"
          type="button"
        >♥</button>
      </div>
    `;

    board.appendChild(card);
  }

  document.getElementById("count").textContent =
    "총 " + list.length + "편";

  document.getElementById("likeCount").textContent =
    liked.length;

  if (list.length === 0) {
    board.classList.add("is-empty");
  } else {
    board.classList.remove("is-empty");
  }
}

// getView : 없음 ⇒ 검색, 보기 필터, 정렬을 차례로 적용한 새 배열
function getView() {
  let list = search(
    movies,
    document.getElementById("q").value
  );

  const type = document.querySelector(
    'input[name="type"]:checked'
  ).value;

  if (type !== "all") {
    list = list.filter(m => m.type === type);
  }

  const key = document.getElementById("sort").value;

  return sortBy(list, key, key !== "title");
}

// refresh : 없음 ⇒ 현재 검색, 보기, 정렬 조건의 카드 표시
function refresh() {
  renderCards(getView());
}

// openDetail : 영화 제목 ⇒ 해당 영화의 상세 대화상자 표시
function openDetail(title) {
  const m = movies.find(m => m.title === title);

  if (!m) {
    return;
  }

  document.getElementById("detailBody").innerHTML = `
    <img src="${posterUrl(m.poster, "w500")}" alt="${m.title} 포스터">
    <h2>${m.title}</h2>
    <p>개봉일: ${m.date}</p>
    <p>평점: ${m.rating}</p>
    <p>${m.overview}</p>
  `;

  dialog.showModal();
}

// 찜한 제목 배열을 브라우저에 저장하고 불러오기
const liked = JSON.parse(localStorage.getItem("liked") || "[]");

// saveLiked : 없음 ⇒ 현재 찜한 제목 배열을 브라우저에 저장
function saveLiked() {
  localStorage.setItem("liked", JSON.stringify(liked));
}

/* 이벤트는 렌더 함수 밖에서 한 번씩 등록 */
document.getElementById("q").addEventListener("input", refresh);
document.getElementById("sort").addEventListener("change", refresh);
document.getElementById("typeFilter").addEventListener("change", refresh);

board.addEventListener("click", (e) => {
  const card = e.target.closest(".card");

  if (!card) {
    return;
  }

  const title = card.getAttribute("data-title");

  if (e.target.closest(".like")) {
    const i = liked.indexOf(title);

    if (i === -1) {
      liked.push(title);
    } else {
      liked.splice(i, 1);
    }

    saveLiked();
    refresh();
    return;
  }

  openDetail(title);
});

document.getElementById("closeDetail").addEventListener("click", () => {
  dialog.close();
});

refresh();