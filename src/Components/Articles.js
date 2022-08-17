import React from "react";
import "./Articles.css";
import ArticleCard from "./ArticleCard";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

function Articles() {
  return (
    <section className="articles">
      <div className="articles-wrapper">
        <h1>Latest Articles</h1>
        <div className="article-cards">
          <ArticleCard
            images={currency}
            author="By Claire Robinson"
            heading="Recieve money in any currency with no fees"
            details="The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single..."
          />
          <ArticleCard
            images={restaurant}
            author="By Wilson Hutton"
            heading="Treat yourself without worrying about money"
            details="Our simple budgetting feature allows you to separate out your spending and set realistic limits each month. Tha means you..."
          />
          <ArticleCard
            images={plane}
            author="By Wilson Hutton"
            heading="Take your Easybank card wherever you go"
            details="We want you to enjoy your travels.This is why we don't charge any fees on purchase whule you're abroad, We'll even show you..."
          />
          <ArticleCard
            images={confetti}
            author="By Claire Robinson"
            heading="Our invite-only Beta accounts are now live!"
            details="After a lot of hard work by the whole team. we're excited to request to  launch our closed beta. it's easy to request an invite throught the site..."
          />
        </div>
      </div>
    </section>
  );
}

export default Articles;
