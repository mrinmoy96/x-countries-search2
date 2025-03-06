// function CountryCard({name, flagImg}){
// 	// flagAltText
// 	return(
// 		<div
// 		style={{
// 			display:"flex",
// 			flexDirection:"column",
// 			justifyContent:"center",
// 			alignItems:"center",
// 			padding:"10px",
// 			margin:"10px",
// 			border:"1px solid grey",
// 			borderRadius:"4px",
// 			width:"200px",
// 			height:"200px"
// 		}}
// 		>
// 			<img 
// 			src={flagImg} 
// 			alt={`Flag of country`} 
// 				style={{
// 					width:"100px",
// 					height:"100px"
// 				}}
// 			/>
// 			<h2>{name}</h2>
// 		</div>
// 	)
// }
// export default CountryCard;

function CountryCard({ name, flagImg }) {
	return (
		<div
			className="countryCard" // ✅ Added required className
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				padding: "10px",
				margin: "10px",
				border: "1px solid grey",
				borderRadius: "4px",
				width: "200px",
				height: "200px",
				textAlign: "center", // ✅ Ensures proper text alignment
			}}
		>
			<img
				src={flagImg}
				alt={`Flag of ${name}`} // ✅ Dynamic alt text
				style={{
					width: "100px",
					height: "100px",
					objectFit: "cover", // ✅ Ensures better flag scaling
				}}
			/>
			<h2 style={{ fontSize: "16px", marginTop: "10px" }}>{name}</h2> {/* ✅ Adjusted font size */}
		</div>
	);
}

export default CountryCard;
