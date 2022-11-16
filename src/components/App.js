import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import List from "./List";

import hogs from "../porkers_data";

function App() {
	const [isGreased, setIsGreased] = useState(false)
	const[sortBy, setSortBy] = useState("name")

	const displayHogs = hogs.filter((hog)=>(isGreased ? hog.greased : true)).sort((hogA, hogB)=>{
		if (sortBy === "weight"){
			return hogA.weight - hogB.weight
		} else{
			return hogA.name.localeCompare(hogB.name)
		}
	})



	return (
	<div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <Filter
          showGreased={isGreased}
          onChangeShowGreased={setIsGreased}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
        />
      </div>
      <div className="sixteen wide column centered">
        <List hogs={displayHogs} />
      </div>
    </div>
	);
}

export default App;
