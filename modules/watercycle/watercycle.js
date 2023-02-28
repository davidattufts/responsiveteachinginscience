// path = ""  

var color1="#94AEC7" // top/bottom (was 999966)
var color2="#5B8484" // text boundary (was 5B8484)
var color3="#999999" // color for the > and | in links (was 999999)
var color4="#888888" // color for the time (was gray = 666666)
var color5="#5B8484" // color for text titles

function WaterModuleMenu(path) 
{
var iestring
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();
// iestring="_"+BrowserDetect.browser;
iestring = "";
if (BrowserDetect.browser == "Explorer") {iestring = "_ie"};

//document.write("<table border='0' width='655' ><tr align='center' bgcolor='#587B8C' ><td width='20%'  ><ul id='nav0'>");
//document.write("<li><a href='index"+iestring+".html'>Module<br />Overview</a></li>");
//document.write("</ul></td><td width='20%'  ><ul id='nav0'>");
//document.write("<li><a href='trajectories"+iestring+".html'>Enacted <br />Trajectories</a></li>");
//document.write("</ul></td><td width='20%'  ><ul id='nav0'>");
//document.write("<li><a href='commonissues.html'>Common Issues<br />across Enactments</a>");
//document.write("</li></ul></td><td width='20%' ><ul id='nav0'>");
//document.write("<li><a href='materials.html'>Supporting<br />Materials</a>");
//document.write("</li></ul></td><td width='20%'  ><ul id='nav0'>");
//document.write("<li><a href='biographies.html'>Teacher<br />Biographies</a>");
//document.write("</li></ul></td></li></ul></tr></table>");
document.write("<table border='0' width='655'><tr bgcolor='#587B8C' align='center' >");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"modules/watercycle/index.html'>Water Cycle Main Site</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"modules/watercycle/index.html'>Module Overview</a></li>");
document.write("<li><a href='"+path+"modules/watercycle/trajectories"+iestring+".html'>Enacted Trajectories</a></li>");
document.write("<li><a href='"+path+"modules/watercycle/commonissues.html'>Common Issues</a></li>");
document.write("<li><a href='"+path+"modules/watercycle/materials.html'>Supporting Materials</a></li>");
document.write("<li><a href='"+path+"modules/watercycle/biographies.html'>Teacher Biographies</a></li>");
document.write("</ul>");
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"modules/watercycle/biographies.html'>Teacher Biographies</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"modules/watercycle/bonnie/index.html'>Bonnie\'s Biography</a></li>");
document.write("<li><a href='"+path+"modules/watercycle/carolyn/index.html'>Carolyn\'s Biography</a></li>");
document.write("</ul>");
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"modules/watercycle/trajectories"+iestring+".html'>Teacher Trajectories</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"modules/watercycle/bonnie/trajectory"+iestring+".html'>Bonnie\'s Trajectory</a></li>");
document.write("<li><a href='"+path+"modules/watercycle/carolyn/trajectory"+iestring+".html'>Carolyn\'s Trajectory</a></li>");
document.write("</ul>");
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<span>Teacher Trajectory Nodes</span");	
document.write("</li></ul>");
document.write("</td>");
document.write("</tr></table>");
}

function WaterModuleMenu2(path,teacherdir) 
{
//document.write("<table border='0' width='655'><tr bgcolor='#587B8C' align='center' id='topMenuLinks'>");
//document.write("<td width='25%'>");
//document.write("<a href='"+path+"watercycle/index.html'>Module<br />Overview</a>");	
//document.write("</td>");
//document.write("<td width='25%'>");
//document.write("<a href='"+path+"watercycle/materials.html'>Supporting<br />Materials</a>");	
//document.write("</td>");
//document.write("<td width='25%'>");
//document.write("<a href='"+path+"watercycle/"+teacherdir+"/index.html'>Teacher<br />Bio</a>");	
//document.write("</td>");
//document.write("<td width='25%'>");
//document.write("<a href='"+path+"watercycle/"+teacherdir+"/trajectory.html'>Enacted<br />Trajectory</a>");	
//document.write("</td>");
//document.write("</tr></table>");
var iestring, teacherName
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();
// iestring="_"+BrowserDetect.browser;
iestring = "";
if (BrowserDetect.browser == "Explorer") {iestring = "_ie"};
teacherName = "";
if (teacherdir=="bonnie") {teacherName="Bonnie"};
if (teacherdir=="carolyn") {teacherName="Carolyn"};


document.write("<table border='0' width='655'><tr bgcolor='#587B8C' align='center' >");
//document.write("<td width='25%'>");
//document.write("<ul id='nav0'><li>");
//document.write("<a href='"+path+"watercycle/index.html'>Water Cycle Main Site</a>");	
//document.write("<ul>");
//document.write("<li><a href='"+path+"watercycle/index.html'>Module Overview</a></li>");
//document.write("<li><a href='"+path+"watercycle/trajectories"+iestring+".html'>Enacted Trajectories</a></li>");
//document.write("<li><a href='"+path+"watercycle/commonissues.html'>Common Issues</a></li>");
//document.write("<li><a href='"+path+"watercycle/materials.html'>Supporting Materials</a></li>");
//document.write("<li><a href='"+path+"watercycle/biographies.html'>Teacher Biographies</a></li>");
//document.write("</ul>");
//document.write("</li></ul>");
//document.write("</td>");
document.write("<td width='34%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"modules/watercycle/"+teacherdir+"/trajectory"+iestring+".html'>"+teacherName+"\'s Trajectory</a>");	
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='33%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='#' onclick='return false'>"+teacherName+"\'s Trajectory Nodes</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"modules/watercycle/"+teacherdir+"/node01"+iestring+".html'>What happened to the puddle?</a></li>");
if (teacherdir=="bonnie") {document.write("<li><a href='"+path+"modules/watercycle/"+teacherdir+"/node02"+iestring+".html'>Puddles vs. cups</a></li>");}
if (teacherdir=="bonnie") {document.write("<li><a href='"+path+"modules/watercycle/"+teacherdir+"/node03"+iestring+".html'>Cup experiments</a></li>");}
if (teacherdir=="bonnie") {document.write("<li><a href='"+path+"modules/watercycle/"+teacherdir+"/node04"+iestring+".html'>Only water evaporates?</a></li>");}
if (teacherdir=="bonnie") {document.write("<li><a href='"+path+"modules/watercycle/"+teacherdir+"/node05"+iestring+".html'>Evaporation experiments</a></li>");}
if (teacherdir=="bonnie") {document.write("<li><a href='"+path+"modules/watercycle/"+teacherdir+"/node06"+iestring+".html'>Aquarium demonstrations</a></li>");}
if (teacherdir=="bonnie") {document.write("<li><a href='"+path+"modules/watercycle/"+teacherdir+"/node07"+iestring+".html'>Condensation</a></li>");}
if (teacherdir=="bonnie") {document.write("<li><a href='"+path+"modules/watercycle/"+teacherdir+"/node08"+iestring+".html'>Finale</a></li>");}
document.write("<ul>");
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='33%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"modules/watercycle/"+teacherdir+"/index.html'>"+teacherName+"\'s Biography</a>");	
document.write("</li></ul>");
document.write("</td>");
document.write("</tr></table>");
}

//function changetext(whichcontent){

//if (document.all||document.getElementById){
//cross_el=document.getElementById? document.getElementById("descriptions"):document.all.descriptions
//cross_el.innerHTML=''+whichcontent+''
//}
//else if (document.layers){
//document.d1.document.d2.document.write(''+whichcontent+'')
//document.d1.document.d2.document.close()
//}
//}