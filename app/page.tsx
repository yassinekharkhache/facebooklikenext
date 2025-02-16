import sidebarstyles from "./sidebar.module.css";
import newpoststyles from "./newpost.module.css";
import main from "./main.module.css";
import Image from "next/image";
import search from "./search.module.css";
import "./globals.css";
import post from "./post.module.css";

type postdata = {
  ProfilePic : string;
  content : string;
  postid : string;
  nickname : string;
  created_at : string;
  updateed_at? : string;
  like : number;
  comment : number;
  postimg? : string;
}

export default function home() {
  return (
    <div className={sidebarstyles.container}>
      <Sidebar />
      <aside className={main.feed}>
      <SearchBar/>
      <NewPost/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </aside>
    </div>
  );
}

export  function Sidebar() {
  return (
    <div className={sidebarstyles.leftSidebar}>
      <div className={sidebarstyles.logo}>
        <a href="/">
          <Image
          className={sidebarstyles.logo}
          src="/logo.png"
          alt="Next.js logo"
          width={100}
          height={60}
          priority
        />
        </a>
      </div>
      <div className={sidebarstyles.nav}>
        <div className={`${sidebarstyles.menuItem} ${sidebarstyles.secondary}`}>
          <i className="fas fa-home"></i> <span>&nbsp;Home</span>
        </div>
        <div className={`${sidebarstyles.menuItem} ${sidebarstyles.secondary}`}>
          <i className="fas fa-user"></i> <span>&nbsp;Profile</span>
        </div>
        <div className={`${sidebarstyles.menuItem} ${sidebarstyles.secondary}`}>
          <i className="fa-solid fa-user-group"></i> <span>&nbsp;Groups</span>
        </div>
        <div className={`${sidebarstyles.menuItem} ${sidebarstyles.secondary}`}>
          <i className="fas fa-envelope"></i> <span>&nbsp;Chats</span>
        </div>
        <div className={`${sidebarstyles.menuItem} ${sidebarstyles.secondary}`}>
          <i className="fas fa-bell"></i> <span>&nbsp;Notifications</span>
        </div>
        <div className={`${sidebarstyles.menuItem} ${sidebarstyles.danger}`}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i> <span>&nbsp;Sign out</span>
        </div>
      </div>
    </div>
  );
}

export function NewPost(){
  return (
    <div className={newpoststyles.newPost}>
      <textarea placeholder="Write something here..."></textarea>
      <div className={newpoststyles.imgPrivacyPost}> 
        <label htmlFor="postImage" className={newpoststyles.imageUp}><i className="fa-regular fa-image"></i> img</label>
        <input type="file" id="postImage" className={newpoststyles.imageUpload} accept="image/*,image/gif"/>
        <select id="privacy" name="privacy">
          <option value="public">Public</option>
          <option value="almostPrivate">Almost Private (followers only)</option>
          <option value="private">Private (selected followers)</option>
        </select>
        <button className={` ${newpoststyles.btn} ${newpoststyles.btnGreen}`}>Post</button>
      </div>
    </div>
  );
}

export function SearchBar(){
  return (
    <div className={search.searchBar}>
                <input type="text" placeholder="&#xF002; Search..." />
    </div>
  )
}
export function Post(){
  return (
    <div className={post.post}>
        <div className={post.postHeader}>
            <Image width={100} height={100} src="/test.jpg" alt="Profile Image" className={post.profileImg}/>
            <div className={post.postInfo}>
                <span className={post.postName}>Ayoub Lahmami</span>
                <span className={post.postTime}>5 min ago</span>
            </div>
        </div>
        <div className={post.postContent}>
            peerLearning is the best way to learn new things
        </div>
        <Image src="/image.png" alt="Post Image" width={10000} height={300} className={post.postImage}/>
        <div className={post.postActions}>
            <label><i className="fa-regular fa-heart"></i> 20</label>
            <label><i className="fa-regular fa-comment"></i> 12</label>
        </div>
    </div>
  )

}

//width={100} height={60} priority
