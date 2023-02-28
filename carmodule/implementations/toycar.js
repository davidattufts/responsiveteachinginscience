// path = "../"  

var color1="#94AEC7" // top/bottom (was 999966)
var color2="#5B8484" // text boundary (was 5B8484)
var color3="#999999" // color for the > and | in links (was 999999)
var color4="#888888" // color for the time (was gray = 666666)
var color5="#5B8484" // color for text titles

function ToyCarModuleMenu(path) 
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
document.write("<a href='"+path+"implementations/index.html'>Toy Car Main Site</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"implementations/index.html'>Module Overview</a></li>");
document.write("<li><a href='"+path+"implementations/trajectories"+iestring+".html'>Enacted Trajectories</a></li>");
document.write("<li><a href='"+path+"implementations/commonissues.html'>Common Issues</a></li>");
document.write("<li><a href='"+path+"implementations/materials.html'>Supporting Materials</a></li>");
document.write("<li><a href='"+path+"implementations/biographies.html'>Teacher Biographies</a></li>");
document.write("</ul>");
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"implementations/biographies.html'>Teacher Biographies</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"implementations/carolyn/index.html'>Carolyn\'s Biography</a></li>");
document.write("<li><a href='"+path+"implementations/sharon/index.html'>Sharon\'s Biography</a></li>");
document.write("</ul>");
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"implementations/trajectories"+iestring+".html'>Teacher Trajectories</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"implementations/carolyn/trajectory"+iestring+".html'>Carolyn\'s Trajectory</a></li>");
document.write("<li><a href='"+path+"implementations/sharon/trajectory"+iestring+".html'>Sharon\'s Trajectory</a></li>");
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

function ToyCarModuleMenu2(path,teacherdir) 
{
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
if (teacherdir=="sharon") {teacherName="Sharon"};
if (teacherdir=="carolyn") {teacherName="Carolyn"};


//document.write("<table border='0' width='655'><tr bgcolor='#587B8C' align='center' id='topMenuLinks'>");
//document.write("<td width='25%'>");
//document.write("<a href='"+path+"implementations/index.html'>Module<br />Overview</a>");	
//document.write("</td>");
//document.write("<td width='25%'>");
//document.write("<a href='"+path+"implementations/materials.html'>Supporting<br />Materials</a>");	
//document.write("</td>");
//document.write("<td width='25%'>");
//document.write("<a href='"+path+"implementations/"+teacherdir+"/index.html'>Teacher<br />Biography</a>");	
//document.write("</td>");
//document.write("<td width='25%'>");
//ocument.write("<a href='"+path+"implementations/"+teacherdir+"/trajectory.html'>Enacted<br />Trajectory</a>");	
//document.write("</td>");
document.write("<table border='0' width='655'><tr bgcolor='#587B8C' align='center' >");
//document.write("<td width='25%'>");
//document.write("<ul id='nav0'><li>");
//document.write("<a href='"+path+"implementations/index.html'>Toy Car Main Site</a>");	
//document.write("<ul>");
//document.write("<li><a href='"+path+"implementations/index.html'>Module Overview</a></li>");
//document.write("<li><a href='"+path+"implementations/trajectories"+iestring+".html'>Enacted Trajectories</a></li>");
//document.write("<li><a href='"+path+"implementations/commonissues.html'>Common Issues</a></li>");
//document.write("<li><a href='"+path+"implementations/materials.html'>Supporting Materials</a></li>");
//document.write("<li><a href='"+path+"implementations/biographies.html'>Teacher Biographies</a></li>");
//document.write("</ul>");
//document.write("</li></ul>");
//document.write("</td>");
document.write("<td width='33%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"implementations/"+teacherdir+"/index.html'>"+teacherName+"\'s Biography</a>");	
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='34%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"implementations/"+teacherdir+"/trajectory"+iestring+".html'>"+teacherName+"\'s Trajectory</a>");	
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='33%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='#' onclick='return false'>"+teacherName+"\'s Trajectory Nodes</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node01"+iestring+".html'>What could get a toy car to move?</a></li>");

if (teacherdir=="sharon") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node02"+iestring+".html'>Explore how to make car move</a></li>");}
if (teacherdir=="sharon") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node03"+iestring+".html'>Ramps</a></li>");}
if (teacherdir=="sharon") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node04"+iestring+".html'>Ramp vs. rubber band</a></li>");}
if (teacherdir=="sharon") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node05"+iestring+".html'>Stretching rubber band</a></li>");}
if (teacherdir=="sharon") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node06"+iestring+".html'>Energy</a></li>");}

if (teacherdir=="carolyn") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node02"+iestring+".html'>Rubber bands</a></li>");}
if (teacherdir=="carolyn") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node03"+iestring+".html'>Ramps</a></li>");}
if (teacherdir=="carolyn") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node04"+iestring+".html'>Propeller car</a></li>");}
if (teacherdir=="carolyn") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node05"+iestring+".html'>Windup car</a></li>");}
if (teacherdir=="carolyn") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node06"+iestring+".html'>Balloon car</a></li>");}
if (teacherdir=="carolyn") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node07"+iestring+".html'>Power</a></li>");}
if (teacherdir=="carolyn") {document.write("<li><a href='"+path+"implementations/"+teacherdir+"/node08"+iestring+".html'>Which type of car goes fastest?</a></li>");}

document.write("</ul>");
document.write("</li></ul>");
document.write("</td>");
document.write("</tr></table>");
}

function changetext(whichcontent){

if (document.all||document.getElementById){
cross_el=document.getElementById? document.getElementById("descriptions"):document.all.descriptions
cross_el.innerHTML=''+whichcontent+''
}
else if (document.layers){
document.d1.document.d2.document.write(''+whichcontent+'')
document.d1.document.d2.document.close()
}
}