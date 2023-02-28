// path = ""  

var color1="#94AEC7" // top/bottom (was 999966)
var color2="#5B8484" // text boundary (was 5B8484)
var color3="#999999" // color for the > and | in links (was 999999)
var color4="#888888" // color for the time (was gray = 666666)
var color5="#5B8484" // color for text titles


function PDMenu(path) 
{
document.write("<table border='0' width='655'><tr bgcolor='#587B8C' align='center' >");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='"+path+"pd/pd.html'>PD Home</a>");	
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='#' onclick='return false'>Toy Car Module PD</a>");	
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='#' onclick='return false'>Water Cycle Module PD</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"pd/watercycle_cloudsrain_kerri.html'>How do clouds rain? (Kerri)</a></li>");
document.write("<li><a href='"+path+"pd/watercycle_cloudsrain_chris.html'>How do clouds rain? (Chris)</a></li>");
document.write("</ul>");
document.write("</li></ul>");
document.write("</td>");
document.write("<td width='25%'>");
document.write("<ul id='nav0'><li>");
document.write("<a href='#' onclick='return false'>Teacher Discussions</a>");	
document.write("<ul>");
document.write("<li><a href='"+path+"pd/launching_module.html'>Launching the Module</a></li>");
document.write("<li><a href='"+path+"pd/next_moves.html'>Next Moves</a></li>");
document.write("<li><a href='"+path+"pd/strategies.html'>Strategies</a></li>");
document.write("<li><a href='"+path+"pd/evaporation_models.html'>Evaporation Models</a></li>");
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