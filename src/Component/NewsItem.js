import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } =
            this.props;
        return (
            <div className="container my-3">
                <div className="card">
                    <span
                        className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
                        style={{ left: "80%", zindex: "1" }}
                    >
                        {source}
                        99+
                    </span>
                    <img
                        src={
                            !imgUrl
                                ? "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/Nayan-1-2-600x315.png"
                                : imgUrl
                        }
                        className="card-img-top"
                        alt="Error"
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                            <span className="badge bg-primary">New</span>
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {!author ? "Unknown" : author} on{" "}
                                {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a
                            href={newsUrl}
                            target="__blank"
                            className="btn btn-sm btn-dark"
                        >
                            Read More
                            {/* jdksajdsajdsald */}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
