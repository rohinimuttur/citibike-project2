
// populating drop-down values for BU and SubBU
var bu_list=bu_list;
var sub_bu_list=sub_bu_list;



//populating the year of birth dropdown
var year_list=[]

for (var i=1970;i<2009;i++)
{
    year_list.push(i);

}

var select_yob = document.getElementById("yearofbirth");
for(index in year_list) 
{
    select_yob.options[select_yob.options.length] = new Option(year_list[index]);
    
}
var yob_select=d3.select("#yearofbirth").property("value").trim();


//populating the start city dropdown
var start_stn=['Catherine St & Monroe St',
'1 Ave & E 30 St',
'E 48 St & 3 Ave',
'Pershing Square N',
'Atlantic Ave & Fort Greene Pl',
'W 59 St & 10 Ave',
'E 47 St & 1 Ave',
'W 4 St & 7 Ave S',
'Division St & Bowery',
'Lexington Ave & E 26 St',
'Elizabeth St & Hester St',
'E 40 St & 5 Ave',
'Cleveland Pl & Spring St',
'W 49 St & 8 Ave',
'Pike St & Monroe St',
'Henry St & Grand St',
'2 Ave & E 31 St',
'Dean St & 4 Ave',
'Broadway & E 14 St',
'University Pl & E 14 St',
'W 39 St & 9 Ave',
'Allen St & Rivington St',
'Mott St & Prince St',
'E 25 St & 2 Ave',
'W 17 St & 8 Ave',
'Lexington Ave & E 24 St',
'Broadway & W 39 St',
'Broadway & W 24 St',
'Greenwich Ave & Charles St',
'Washington Pl & Broadway',
'South End Ave & Liberty St',
'Central Park S & 6 Ave',
'W 15 St & 7 Ave',
'MacDougal St & Prince St',
'Broadway & W 29 St',
'Lafayette Ave & Fort Greene Pl',
'Willoughby Ave & Hall St',
'Avenue D & E 3 St',
'Hudson St & Reade St',
'W 20 St & 7 Ave',
'Broadway & E 22 St',
'9 Ave & W 14 St',
'Emerson Pl & Myrtle Ave',
'Centre St & Worth St',
'Gallatin Pl & Livingston St',
'E 37 St & Lexington Ave',
'E 11 St & 1 Ave',
'8 Ave & W 31 St',
'West Thames St',
'S 5 Pl & S 4 St',
'Park Pl & Church St',
'W 42 St & 8 Ave',
'E 13 St & Avenue A',
'Lafayette Ave & St James Pl',
'Broadway & W 60 St',
'Lispenard St & Broadway',
'Canal St & Rutgers St',
'Church St & Leonard St',
'9 Ave & W 45 St',
'Lafayette St & E 8 St',
'Ashland Pl & Hanson Pl',
'W 43 St & 6 Ave',
'Greenwich Ave & 8 Ave',
'12 Ave & W 40 St',
'W Broadway & Spring St',
'Christopher St & Greenwich St',
'Allen St & E Houston St',
'1 Ave & E 15 St',
'E 14 St & Avenue B',
'W Houston St & Hudson St',
'Clinton Ave & Myrtle Ave',
'W 45 St & 8 Ave',
'Forsyth St & Broome St',
'W 56 St & 6 Ave',
'W 14 St & The High Line',
'E 11 St & 2 Ave',
'Broadway & W 36 St',
'State St',
'W 20 St & 11 Ave',
'Madison St & Montgomery St',
'St James Pl & Pearl St',
'Bank St & Washington St',
'11 Ave & W 27 St',
'Lexington Ave & Classon Ave',
'Lafayette Ave & Classon Ave',
'Grand St & Greene St',
'Fulton St & Clermont Ave',
'Henry St & Poplar St',
'Mercer St & Bleecker St',
'1 Ave & E 44 St',
'Clinton St & Tillary St',
'W 26 St & 8 Ave',
'E 7 St & Avenue A',
'W 24 St & 7 Ave',
'Grand Army Plaza & Central Park S',
'Atlantic Ave & Furman St',
'Howard St & Centre St',
'W 22 St & 8 Ave',
'Carmine St & 6 Ave',
'Cumberland St & Lafayette Ave',
'Bank St & Hudson St',
'E 52 St & 2 Ave',
'E 15 St & 3 Ave',
'E 31 St & 3 Ave',
'W 11 St & 6 Ave',
'Great Jones St',
'Norfolk St & Broome St',
'E 3 St & 1 Ave',
'Clinton St & Grand St',
'W 22 St & 10 Ave',
'E 2 St & Avenue C',
'E 56 St & 3 Ave',
'E 45 St & 3 Ave',
'DeKalb Ave & Vanderbilt Ave',
'Liberty St & Broadway',
'E 2 St & 2 Ave',
'Broad St & Bridge St',
'Broadway & W 32 St',
'W 37 St & 5 Ave',
'W 52 St & 9 Ave',
'W 52 St & 5 Ave',
'W 37 St & 10 Ave',
'W 29 St & 9 Ave',
'2 Ave & E 58 St',
'9 Ave & W 16 St',
'Duane St & Greenwich St',
'Pike St & E Broadway',
'Franklin St & W Broadway',
'6 Ave & W 33 St',
'W 20 St & 8 Ave',
'Washington Square E',
'E 20 St & Park Ave',
'LaGuardia Pl & W 3 St',
'10 Ave & W 28 St',
'W 27 St & 7 Ave',
'W 18 St & 6 Ave',
'Lawrence St & Willoughby St',
'9 Ave & W 22 St',
'W 31 St & 7 Ave',
'Clermont Ave & Lafayette Ave',
'W 26 St & 10 Ave',
'E 12 St & 3 Ave',
'Willoughby Ave & Walworth St',
'St Marks Pl & 2 Ave',
'W 16 St & The High Line',
'E 17 St & Broadway',
'Bialystoker Pl & Delancey St',
'W 47 St & 10 Ave',
'Columbia St & Rivington St',
'Suffolk St & Stanton St',
'Kent Ave & S 11 St',
'Lafayette St & Jersey St',
'6 Ave & Broome St',
'5 Ave & E 29 St',
'E 6 St & Avenue B',
'W 21 St & 6 Ave',
'W 13 St & 6 Ave',
'E 16 St & Irving Pl',
'Willoughby St & Fleet St',
'DeKalb Ave & Hudson Ave',
'E 56 St & Madison Ave',
'E 39 St & 2 Ave',
'6 Ave & Canal St',
'Harrison St & Hudson St',
'W 25 St & 6 Ave',
'Wythe Ave & Metropolitan Ave',
'Henry St & Atlantic Ave',
'E 4 St & 2 Ave',
'Stanton St & Chrystie St',
'State St & Smith St',
'Reade St & Broadway',
'Spruce St & Nassau St',
'MacDougal St & Washington Sq',
'Washington Pl & 6 Ave',
'W 13 St & 5 Ave',
'W 13 St & 7 Ave',
'Warren St & Church St',
'Washington St & Gansevoort St',
'Johnson St & Gold St',
'West St & Chambers St',
'8 Ave & W 33 St',
'York St & Jay St',
'Rivington St & Chrystie St',
'E 43 St & Vanderbilt Ave',
'E 55 St & Lexington Ave',
'Perry St & Bleecker St',
'Metropolitan Ave & Bedford Ave',
'Bond St & Schermerhorn St',
'W 56 St & 10 Ave',
'E 20 St & FDR Drive',
'E 9 St & Avenue C',
'E 33 St & 5 Ave',
'Broadway & W 53 St',
'St Marks Pl & 1 Ave',
'W 43 St & 10 Ave',
'E 16 St & 5 Ave',
'Barrow St & Hudson St',
'Shevchenko Pl & E 6 St',
'John St & William St',
'W 53 St & 10 Ave',
'Sullivan St & Washington Sq',
'E 11 St & Broadway',
'W 46 St & 11 Ave',
'9 Ave & W 18 St',
'Allen St & Hester St',
'1 Ave & E 18 St',
'E 53 St & Lexington Ave',
'Fulton St & Waverly Ave',
'E 19 St & 3 Ave',
'Clinton St & Joralemon St',
'11 Ave & W 41 St',
'Grand St & Havemeyer St',
'E 39 St & 3 Ave',
'E 25 St & 1 Ave',
'W 33 St & 7 Ave',
'8 Ave & W 52 St',
'Greenwich St & Warren St',
'Watts St & Greenwich St',
'Macon St & Nostrand Ave',
'E 30 St & Park Ave S',
'Montague St & Clinton St',
'S 4 St & Wythe Ave',
'S Portland Ave & Hanson Pl',
'Pitt St & Stanton St',
'E 47 St & 2 Ave',
'DeKalb Ave & Skillman St',
'Market St & Cherry St',
'E 20 St & 2 Ave',
'E 5 St & Avenue C',
'E 10 St & 5 Ave',
'E 2 St & Avenue B',
'E 55 St & 2 Ave',
'Lefferts Pl & Franklin Ave',
'E 6 St & Avenue D',
'E 27 St & 1 Ave',
'Avenue D & E 12 St',
'W 34 St & 11 Ave',
'FDR Drive & E 35 St',
'St James Pl & Oliver St',
'W 44 St & 5 Ave',
'E 33 St & 1 Ave',
'E 10 St & Avenue A',
'Vesey Pl & River Terrace',
'Clark St & Henry St',
'Water - Whitehall Plaza',
'Pearl St & Hanover Square',
'Hicks St & Montague St',
'Barclay St & Church St',
'E 51 St & 1 Ave',
'E 32 St & Park Ave',
'W 49 St & 5 Ave',
'W 54 St & 9 Ave',
'Sands St & Gold St',
'E 23 St & 1 Ave',
'Stanton St & Mangin St',
'Cadman Plaza E & Tillary St',
'Front St & Washington St',
'Hancock St & Bedford Ave',
'E 58 St & 3 Ave',
'Cliff St & Fulton St',
'Front St & Gold St',
'Madison St & Clinton St',
'DeKalb Ave & S Portland Ave',
'Avenue D & E 8 St',
'Greenwich St & N Moore St',
'Concord St & Bridge St',
'E 51 St & Lexington Ave',
'Little West St & 1 Pl',
'Murray St & West St',
'Fulton St & William St',
'Franklin Ave & Myrtle Ave',
'Park Ave & St Edwards St',
'Fulton St & Grand Ave',
'Cherry St',
'Forsyth St & Canal St',
'Flushing Ave & Carlton Ave',
'Duffield St & Willoughby St',
'Rivington St & Ridge St',
'Washington Park',
'E 59 St & Sutton Pl',
'Bayard St & Baxter St',
'W 38 St & 8 Ave',
'Broadway & Berry St',
'W 52 St & 11 Ave',
'Adelphi St & Myrtle Ave',
'Monroe St & Bedford Ave',
'Washington Ave & Park Ave',
'Maiden Ln & Pearl St',
'Nassau St & Navy St',
'Broadway & Battery Pl',
'Washington Ave & Greene Ave',
'Clermont Ave & Park Ave',
'Clinton Ave & Flushing Ave',
'Laight St & Hudson St',
'E 43 St & 2 Ave',
'Columbia Heights & Cranberry St',
'Pearl St & Anchorage Pl',
'Jay St & Tech Pl',
'William St & Pine St',
'Mercer St & Spring St',
'Front St & Maiden Ln',
'South St & Gouverneur Ln',
'Joralemon St & Adams St',
'S 3 St & Bedford Ave',
'South St & Whitehall St',
'Broadway & W 37 St',
'Broadway & W 58 St',
'3 Ave & Schermerhorn St',
'Old Fulton St',
'Old Slip & Front St',
'Fulton St & Rockwell Pl',
'Monroe St & Classon Ave',
'Broadway & W 41 St',
'W 41 St & 8 Ave',
'E 53 St & Madison Ave',
'Pershing Square S',
'W 51 St & 6 Ave',
'Centre St & Chambers St',
'W 45 St & 6 Ave',
'Myrtle Ave & St Edwards St',
'Bedford Ave & S 9th St',
'E 47 St & Park Ave',
'7 Ave & Farragut St',
'Hanover Pl & Livingston St',
'Railroad Ave & Kay Ave',
'Broadway & W 51 St',
'Broadway & W 49 St',
'Broadway & W 55 St',
'Carlton Ave & Park Ave'
]

console.log(start_stn)
var select_start_stn = document.getElementById("startstn");
for(index in start_stn) 
{
    select_start_stn.options[select_start_stn.options.length] = new Option(start_stn[index]);
    
}
var start_stn_select=d3.select("#startstn").property("value").trim();

var select_end_stn = document.getElementById("endstn");
for(index in start_stn) 
{
    select_end_stn.options[select_end_stn.options.length] = new Option(start_stn[index]);
    
}
var end_stn_select=d3.select("#endst").property("value").trim();



