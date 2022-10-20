import React, { useState } from "react";
import Navabar3 from "../Shared/Navbar/Navabar3";

const liveStreamsList = [
  {
    id: 1,
    Title: "Teaching Filmotgraphy",
    OwnerName: "Owner 1",
    LiveImage:
      "https://ugc.futurelearn.com/uploads/images/ae/1e/ae1ebcb8-4c3c-4e79-9e09-cd17f77aa2e2.jpg",
    OwnerImage:
      "https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419",
    shortSummery:
      "Gebauer, Dorothea and Harriet W. Harrison. Bibliography of National Filmographies. Brussels: FIAF, 1985 80p.",
    Summery:
      "A filmography is a list of films related by some criteria. For example, an actor's career filmography is the list of films they have appeared in; a director's comedy filmography is the list of comedy films directed by a particular director. The term, which has been in use since at least 1957,[1] is modeled on and analogous to bibliography, a list of books. As lists filmographies are distinct from the cinematic arts of  and  which refer to the processes themselves, and which are analogous to photography instead.",
  },
  {
    id: 2,
    Title: "Teaching Filmotgraphy",
    OwnerName: "Owner 2",
    LiveImage:
      "https://brightclassroomideas.com/wp-content/uploads/2020/08/halfnelsSTILL1.jpg",
    OwnerImage:
      "https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg",
    shortSummery:
      "Gebauer, Dorothea and Harriet W. Harrison. Bibliography of National Filmographies. Brussels: FIAF, 1985 80p.",
    Summery:
      "A filmography is a list of films related by some criteria. For example, an actor's career filmography is the list of films they have appeared in; a director's comedy filmography is the list of comedy films directed by a particular director. The term, which has been in use since at least 1957,[1] is modeled on and analogous to bibliography, a list of books. As lists filmographies are distinct from the cinematic arts of  and  which refer to the processes themselves, and which are analogous to photography instead.",
  },
  {
    id: 3,
    Title: "Teaching Filmotgraphy",
    OwnerName: "Owner 3",
    LiveImage:
      "https://i.pinimg.com/736x/97/22/4d/97224dc2f87584c0e244ec839ff66aec--activities-for-students-resources-for-teachers.jpg",
    OwnerImage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    shortSummery:
      "Gebauer, Dorothea and Harriet W. Harrison. Bibliography of National Filmographies. Brussels: FIAF, 1985 80p.",
    Summery:
      "A filmography is a list of films related by some criteria. For example, an actor's career filmography is the list of films they have appeared in; a director's comedy filmography is the list of comedy films directed by a particular director. The term, which has been in use since at least 1957,[1] is modeled on and analogous to bibliography, a list of books. As lists filmographies are distinct from the cinematic arts of  and  which refer to the processes themselves, and which are analogous to photography instead.",
  },
  {
    id: 4,
    Title: "Teaching Filmotgraphy",
    OwnerName: "Owner 4",
    LiveImage:
      "https://raindance.org/wp-content/uploads/2021/03/dom-fou-YRMWVcdyhmI-unsplash.jpg",
    OwnerImage:
      "https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top",
    shortSummery:
      "Gebauer, Dorothea and Harriet W. Harrison. Bibliography of National Filmographies. Brussels: FIAF, 1985 80p.",
    Summery:
      "A filmography is a list of films related by some criteria. For example, an actor's career filmography is the list of films they have appeared in; a director's comedy filmography is the list of comedy films directed by a particular director. The term, which has been in use since at least 1957,[1] is modeled on and analogous to bibliography, a list of books. As lists filmographies are distinct from the cinematic arts of  and  which refer to the processes themselves, and which are analogous to photography instead.",
  },
];

const Livestreams = () => {
  const [WatchLive, setWatchLive] = useState("");

  const RenderLiveStream = liveStreamsList.map((prop) => {
    return (
      <div className="flex justify-bwtween w-1/2 gap-5 font-mono" key={prop.id}>
        <img
          src={prop.LiveImage}
          alt={prop.LiveImage}
          className="img img-rounded w-60 h-60"
        />
        <div className="text-white text-start">
          <div className="text-2xl w-96"> {prop.Title}</div>
          <div className="w-48"> {prop.shortSummery}</div>
          <button
            className="bg-white px-4 rounded-full text-black hover:bg-yellow mt-2"
            onClick={(e) => {
              e.preventDefault();
              setWatchLive(prop.id);
            }}
          >
            Watch
          </button>
        </div>
      </div>
    );
  });

  const SelectedLiveStream = liveStreamsList.filter(
    (stream) => stream.id === WatchLive
  );

  // console.log(SelectedLiveStream);

  return (
    <div className="bg-vividAuburn w-full h-screen overflow-scroll ">
      <Navabar3 />
      <div className="w-11/12 m-auto">
        {" "}
        <div className="flex  mt-1 justify-around  gap-10">
          <div className="flex flex-col">
            <div className="font-mono text-end text-white">Live</div>
            <img
              src={
                SelectedLiveStream[0]
                  ? SelectedLiveStream[0].LiveImage
                  : liveStreamsList[0].LiveImage
              }
              alt={
                SelectedLiveStream[0]
                  ? SelectedLiveStream[0].OwnerName
                  : liveStreamsList[0].OwnerName
              }
              style={{ width: "800px", height: "300px" }}
            />
          </div>
          <div className="w-4/5 font-mono">
            <div className="text-4xl text-white text-start ">
              {liveStreamsList[0].Title}
            </div>
            <p className="text-start text-white w-3/5">
              {SelectedLiveStream[0]
                ? SelectedLiveStream[0].Summery.slice(0, 350)
                : liveStreamsList[0].Summery.slice(0, 350)}
            </p>
            <div className="w-96 flex justify-between text-white mt-2">
              <i className="fa fa-user text-3xl">1.2k</i>
              <i className="fa fa-thumbs-up text-3xl">6k</i>
              <i className="fa fa-thumbs-down text-3xl">5</i>
            </div>
            <div className="mt-3 flex justify-between w-96">
              <img
                src={
                  SelectedLiveStream[0]
                    ? SelectedLiveStream[0].OwnerImage
                    : liveStreamsList[0].OwnerImage
                }
                alt={liveStreamsList[0].OwnerName}
                className="img img-rounded w-8 h-8  rounded-full"
              />
              <div className="text-white">
                {SelectedLiveStream[0]
                  ? SelectedLiveStream[0].OwnerName
                  : liveStreamsList[0].OwnerName}
              </div>
              <button className="bg-white px-4 rounded-full hover:bg-yellow">
                Follow
              </button>
            </div>
          </div>
        </div>{" "}
        <h1 className=" mt-5 mb-5 text-4xl  gap-10 text-start text-white font-mono">
          More LiveStreams
        </h1>
        <div className="gap-10">
          <div className="flex p-2 mt-1 justify-between m-auto gap-44 overflow-x-scroll">
            {" "}
            {RenderLiveStream}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livestreams;












