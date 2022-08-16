import "./style.css";

function ForumContainer({ prop }) {
  return (
    <>
      <div className="forum-container">
        <div className="forum-container-header">
          <p>User</p>
          <p>11.11.2021 o 23:22</p>
        </div>
        <h4 className="forum-container-title">Fizyka kwantowa</h4>

        <p className="forum-container-description">{prop.description}</p>
        <div className="forum-container-comment-section">
          <label for="forum-coment">comment</label>
          <textarea id="forum-coment" name="forum-coment" rows="2" cols="50"></textarea>
        </div>
      </div>
    </>
  );
}

export default ForumContainer;
