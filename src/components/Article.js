import React from "react";

function Article({ title, date, preview }) {
  const getReadTimeEmoji = (minutes) => {
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);

    const coffeeEmoji = "☕️";
    const bentoBoxEmoji = "🍱";

    if (minutes < 30) {
      return coffeeEmoji.repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      return bentoBoxEmoji.repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <span>{getReadTimeEmoji(30)}</span>
    </article>
  );
}

export default Article;
