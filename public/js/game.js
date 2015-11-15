//temp object until they give  us real ones
/*var songData = {
    songName : "Harder Better Faster Stronger",
    url : "assets/harder_better_faster_stronger",
    difficulty : "EZPZ",
    data : [
    { arrow : "3", time : 200 },
    { arrow : "3", time : 1000 },
    { arrow : "10", time : 2000 }
    ]
};*/

var songData = {
    songName : "Pokemon Theme Song",
    url : "assets/pokemon_theme_song",
    difficulty : "easy",
    data : /*[[1,5381],
[2,5694],
[1,6099],
[1,6453],
[2,6654],
[1,7039],
[1,7424],
[2,7621],
[1,7996],
[1,8369],
[2,8552],
[1,8901],
[4,9088],
[4,9558],
[4,10058],
[4,10529],
[4,11013],
[4,11494],
[4,11946],
[4,12354],
[1,12933],
[1,13180],
[2,13398],
[1,13805],
[1,14180],
[2,14412],
[1,14770],
[1,15167],
[2,15387],
[1,15769],
[1,16115],
[2,16332],
[4,16829],
[2,17073],
[4,17365],
[2,17611],
[4,17793],
[2,18076],
[4,18310],
[2,18559],
[4,18773],
[2,18997],
[4,19250],
[2,19486],
[4,19671],
[2,19983],
[4,20227],
[2,20464],
[1,20754],
[1,21252],
[1,21769],
[2,22230],
[1,22714],
[1,23223],
[1,23662],
[1,24190],
[2,24616],
[4,25115],
[2,25316],
[4,25606],
[4,26119],
[4,26588],
[4,26983],
[4,27523],
[4,28010],
[2,28499],
[1,28739],
[2,28963],
[4,29207],
[4,29582],
[2,29803],
[1,29980],
[4,30438],
[2,30670],
[2,30960],
[1,31441],
[2,31680],
[4,32397],
[4,32878],
[4,33323],
[4,33799],
[4,34286],
[4,34793],
[4,35246],
[4,35798],
[1,36310],
[4,36641],
[8,37068],
[4,37441],
[2,37707],
[4,38022],
[1,38280],
[4,38523],
[1,38802],
[4,38986],
[2,39230],
[8,39638],
[1,40194],
[1,40687],
[1,41164],
[1,41674],
[1,42109],
[1,42615],
[1,43116],
[1,43598],
[1,44058],
[2,44389],
[2,44589],
[2,44845],
[1,45114],
[1,45292],
[4,45601],
[4,45833],
[1,46062],
[8,46550],
[8,46759],
[1,47042],
[2,47513],
[2,47737],
[1,47971],
[4,48310],
[1,48464],
[4,48746],
[1,49010],
[4,49368],
[1,49486],
[4,49707],
[1,49961],
[4,50342],
[1,50447],
[4,50647],
[1,50897],
[4,51267],
[1,51846],
[4,52345],
[1,52844],
[1,53069],
[2,53339],
[1,53839],
[1,54036],
[8,54266],
[1,54766],
[1,54967],
[2,55277],
[1,55766],
[1,56230],
[1,56720],
[1,57197],
[1,57697],
[1,58157],
[1,58661],
[1,59154],
[1,59616],
[1,59835],
[4,60108],
[4,60344],
[1,60599],
[1,60868],
[2,61101],
[2,61335],
[1,61565],
[1,61783],
[8,62096],
[8,62325],
[1,62539],
[1,62747],
[2,63003],
[2,63219],
[1,63525],
[1,64002],
[1,64480],
[1,65000],
[1,65493],
[1,65940],
[1,66398],
[1,66881],
[1,67387],
[1,67605],
[2,67864],
[1,68398],
[1,68634],
[4,68859],
[1,69355],
[1,69571],
[8,69832],
[1,70310],
[1,70539],
[8,70779],
[1,70786],
[8,71316],
[8,71786],
[8,72243],
[8,72746],
[8,73203],
[8,73685],
[8,74145],
[8,74683],
[4,75121],
[4,75407],
[2,75639],
[8,76134],
[8,76384],
[1,76644],
[4,77144],
[4,77381],
[2,77611],
[8,78069],
[8,78310],
[8,78548],
[1,78568],
[8,78789],
[1,78796],
[4,79527],
[2,80104],
[2,81012],
[4,81480],
[1,82947],
[1,83151],
[4,83430],
[2,83930],
[2,84155],
[8,84379],
[4,84882],
[2,84885],
[4,85128],
[2,85142],
[8,85467],
[1,85898],
[8,85904],
[8,86139],
[1,86148],
[4,86400],
[2,86427],
[1,86864],
[1,87355],
[1,87851],
[1,88308],
[4,88540],
[1,88789],
[1,89315],
[1,89762],
[1,90264],
[4,90698],
[4,90925],
[2,91180],
[8,91687],
[8,91911],
[4,92128],
[8,92654],
[8,92856],
[1,93150],
[2,93710],
[2,93905],
[4,94125],
[4,94345],
[1,94639],
[1,95470],
[1,96029],
[1,96548],
[1,97035],
[1,97522],
[1,98029],
[1,98487],
[2,98967],
[2,99236],
[1,99483],
[1,99734],
[4,99928],
[4,100170],
[1,100398],
[1,100625],
[8,100862],
[8,101078],
[1,101371],
[1,101625],
[2,101849],
[2,102069],
[1,102345],
[4,102395],
[8,102802],
[2,102855],
[4,103296],
[1,103318],
[8,103792],
[2,103828],
[4,104305],
[2,104315],
[4,104552],
[2,104575],
[1,104815],
[8,104865],
[4,105292],
[2,105305],
[8,105796],
[1,105808],
[4,106264],
[4,106483],
[1,106737],
[1,106980],
[2,107231],
[2,107469],
[8,107691],
[8,107944],
[4,108193],
[2,108206],
[4,108414],
[2,108433],
[8,108684],
[1,108693],
[8,108930],
[1,108973],
[4,109201],
[2,109226],
[4,109425],
[2,109434],
[8,109657],
[1,109688],
[8,109907],
[1,109914],
[4,110170],
[2,110654],
[4,111154],
[1,111598],
[8,112083],
[4,112542],
[2,113048],
[4,113535],
[4,114029],
[2,114035],
[4,114243],
[2,114252],
[1,114512],
[4,114513],
[4,114746],
[1,114769],
[4,115013],
[2,115065],
[4,115236],
[2,115244],
[8,115467],
[2,115480],
[8,115711],
[2,115726],
[2,115996],
[4,116007],
[4,116252],
[2,116264],
[1,116514],
[4,116516],
[4,116733],
[1,116746],
[4,116980],
[2,116990],
[4,117204],
[2,117207],
[8,117456],
[2,117480],
[8,117690],
[2,117691],
[2,117957],
[4,117963],
[4,118427],
[2,118437],
[2,118908],
[4,118911],
[4,119398],
[2,119404],
[8,119858],
[1,119877],
[4,120325],
[2,120348],
[8,120812],
[1,120864],
[4,121079],
[4,121351],
[4,121576],
[2,121849],
[4,122358],
[1,122865],
[8,123295],
[2,123789],
[4,124289],
[2,124786],
[4,125282],
[8,125730],
[1,126223],
[4,126687],
[2,127164],
[8,127661],
[1,128135],
[4,128611],
[2,129109],
[4,129601],
[1,130081],
[2,130565],
[8,131065],
[1,131497],
[4,131986],
[2,132500],
[8,133002],
[4,133470],
[2,133967],
[4,134440],
[2,134958],
[1,135397],
[8,135902],
[2,136361],
[4,136362],
[4,136592],
[2,136601],
[4,136875],
[2,136884],
[4,137141],
[2,137154],
[4,137387],
[1,137868],
[2,138348],
[8,138815],
[4,139302],
[4,139568],
[2,139842],
[2,140062],
[4,140289],
[2,140779],
[2,141042],
[1,141289],
[4,141749],
[2,142244],
[8,142729],
[4,143229],
[2,143693],
[4,144188],
[2,144197],
[2,144407],
[4,144410],
[1,144673],
[8,144674],
[8,144898],
[1,144904],
[4,145137],
[2,145609],
[4,146119],
[8,146533],
[1,146815],
[4,147091],
[2,147338],
[8,147585],
[1,147832],
[4,148055],
[4,148279],
[2,148385],
[2,148680],
[4,149016],
[1,149270],
[8,149479],
[2,149789],
[2,150039],
[4,150366],
[4,150573],
[1,150967],
[4,151184],
[2,151453],
[4,151707],
[1,151961],
[1,152457],
[4,152927],
[4,153279],
[2,153565],
[4,153800],
[4,154071],
[4,154440],
[4,155122],
[2,155352],
[2,155875],
[2,156086],
[2,156305],
[8,156342],
[2,156582],
[2,156816],
[2,157039],
[4,157287],
[4,157516],
[2,157802],
[2,158043],
[4,158296],
[4,158493],
[8,158763],
[8,159010],
[4,159231],
[4,159453],
[2,159703],
[4,160200],
[2,160480],
[4,160696],
[4,161226],
[2,161710],
[4,161981],
[2,162211],
[4,162651],
[4,163102],
[2,163180],
[4,163384],
[4,163851],
[2,164068],
[8,164562],
[2,165072],
[8,165312],
[8,165815],
[1,166042],
[8,166549],
[1,166999],
[8,167236],
[8,167723],
[1,167954],
[8,168458],
[1,168471],
[8,168691],
[1,168701],
[4,168938],
[2,168976],
[4,169165],
[2,169188],
[8,169420],
[1,169440],
[1,169677],
[8,169690],
[1,169829],
[8,169841],
[8,170098],
[1,170111],
[4,170412],
[4,170664],
[2,170908],
[2,171115],
[4,171381],
[1,171635],
[4,171770],
[1,171918],
[4,172256],
[2,172560],
[8,172792],
[2,173078],
[4,173331],
[4,173530],
[4,173698],
[4,173969],
[2,174344],
[4,174555],
[2,174812],
[8,175003],
[1,175323],
[1,175677],
[8,176246],
[8,176473],
[1,176708],
[1,176957],
[4,177203],
[4,177440],
[2,177700],
[2,177924],
[4,178188],
[2,178190],
[4,178430],
[2,178444],
[1,178673],
[1,178915],
[4,178918],
[4,179157],
[1,179188],
[4,179384],
[1,179397],
[1,179536],
[4,179537],
[4,179779],
[1,179783],
[8,180137],
[2,180387],
[4,180639],
[1,180875],
[8,181099],
[8,181305],
[8,181457],
[8,181792],
[4,182105],
[2,182586],
[4,183029],
[8,183266],
[1,183510],
[4,183706],
[2,184022],
[4,184502],
[1,185027],
[4,185555],
[2,186016],
[2,186276],
[4,186463],
[4,187129],
[2,187417],
[4,187947],
[1,188411],
[1,189101],
[2,189375],
[8,189894],
[4,190371],
[8,191076],
[2,191325],
[4,191825],
[8,192322],
[1,192786],
[4,193263],
[2,193786],
[1,194223],
[4,194707],
[1,194953],
[4,195105],
[1,195345],
[2,195707],
[4,196180],
[8,196687],
[4,197152],
[2,197637],
[1,198116],
[2,198594],
[4,198813],
[2,199069],
[8,199585],
[4,200083],
[2,200606],
[1,201066],
[2,201539],
[4,201540],
[1,202006],
[8,202012],
[4,202463],
[2,202473],
[8,202937],
[1,203002],
[4,203395],
[2,203713],
[4,203951],
[2,204185],
[4,204329],
[2,204599],
[4,204935],
[4,205154],
[2,205435],
[4,205877],
[1,206325],
[1,206733],
[2,206941],
[1,207377],
[4,207851],
[4,208344],
[2,208349],
[4,208586],
[2,208592],
[8,208828],
[1,208836],
[4,209298],
[2,209303],
[4,209543],
[2,209552],
[1,209792],
[2,209806],
[4,210249],
[1,210267],
[4,210491],
[1,210506],
[4,210731],
[1,210737],
[2,211224],
[8,211226],
[1,211737],
[4,211743],
[8,212193],
[2,212220],
[4,212675],
[1,212698],
[8,213178],
[1,213424],
[4,213652],
[2,213914],
[8,214134],
[1,214394],
[4,214644],
[4,214842],
[8,215118],
[4,215601],
[8,216098],
[8,216322],
[8,216470],
[8,216753],
[4,217076],
[8,217532],
[4,218075],
[4,218369],
[4,218503],
[4,218772],
[8,219049],
[4,219510],
[2,220012],
[4,220230],
[1,220523],
[4,220961],
[1,221467],
[8,221924],
[2,222417],
[4,222420],
]*/[[1,5950],
[1,6177],
[1,6367],
[2,7036],
[4,7253],
[2,7631],
[4,7861],
[2,8776],
[4,8958],
[4,9298],
[4,9726],
[4,9927],
[4,10144],
[1,11111],
[8,11537],
[2,11947],
[4,12156],
[1,12594],
[4,13006],
[4,13406],
[4,13610],
[2,14006],
[4,14450],
[8,15545],
[1,15552],
[2,16114],
[4,16119],
[1,16723],
[8,16726],
[2,18138],
[4,18360],
[8,18558],
[2,19236],
[2,19642],
[2,19828],
[4,20309],
[4,20467],
[4,20861],
[4,21059],
[2,22098],
[8,22310],
[4,22917],
[1,23315],
[2,23552],
[1,24361],
[4,24365],
[8,24765],
[2,24778],
[1,25177],
[8,25185],
[8,25392],
[1,25399],
[4,25855],
[2,26110],
[4,26304],
[4,26883],
[4,27071],
[4,27494],
[4,27682],
[1,28440],
[1,28685],
[2,29165],
[4,29389],
[8,29755],
[4,30073],
[2,31397],
[4,31631],
[8,31847],
[8,32494],
[8,32682],
[8,32878],
[8,33085],
[4,33472],
[2,33694],
[4,33924],
[2,34298],
[4,35967],
[1,35976],
[4,36151],
[1,36161],
[1,36328],
[4,36334],
[8,36728],
[2,36733],
[4,37166],
[1,37192],
[8,37565],
[2,37578],
[4,38161],
[4,38423],
[2,38996],
[8,40004],
[2,40274],
[8,40506],
[4,40957],
[2,41583],
[4,41790],
[8,42005],
[8,42450],
[4,42650],
[2,43025],
[1,43203],
[2,44604],
[4,44818],
[2,45032],
[8,45646],
[8,45861],
[8,46083],
[8,46295],
[4,46745],
[8,47123],
[4,47601],
[4,48180],
[2,49164],
[4,49365],
[8,49769],
[8,50019],
[4,50504],
[2,50881],
[1,51877],
[4,51879],
[8,52126],
[2,52144],
[8,52540],
[2,52548],
[1,52945],
[4,52950],
[8,53292],
[2,53310],
[1,53687],
[8,53693],
[8,54165],
[1,54175],
[1,55167],
[2,55170],
[4,55716],
[2,55722],
[8,56364],
[4,56377],
[2,57198],
[4,57426],
[2,57621],
[4,57832],
[2,58264],
[1,58883],
[4,59088],
[2,59292],
[4,59506],
[8,59962],
[4,60700],
[2,61154],
[2,63062],
[4,63304],
[2,63756],
[4,63976],
[4,67226],
[4,67447],
[4,67657],
[4,67858],
[4,68335],
[4,68540],
[4,68910],
[4,69108],
[2,70147],
[4,70943],
[2,71404],
[4,71601],
[8,72354],
[2,72810],
[4,73199],
[1,73406],
[2,74255],
[2,74496],
[4,74935],
[4,75118],
[4,75486],
[4,75682],
[2,76486],
[4,76703],
[4,77107],
[2,77328],
[1,77784],
[2,77973],
[2,79449],
[4,79626],
[8,79819],
[2,80565],
[2,80736],
[2,80921],
[2,81526],
[2,81721],
[2,82114],
[2,82319],
[4,82688],
[2,82913],
[8,83117],
[2,83496],
[2,83833],
[2,84197],
[2,84394],
[2,84597],
[4,85594],
[1,86035],
[2,86393],
[2,86631],
[4,87060],
[2,87278],
[4,87491],
[1,88068],
[2,88255],
[4,88738],
[2,88943],
[2,89712],
[8,89723],
[8,89945],
[2,89963],
[4,90380],
[1,90381],
[4,90590],
[1,90596],
[8,91004],
[2,91009],
[8,91225],
[2,91230],
[2,92664],
[4,92848],
[8,93069],
[8,93708],
[8,93889],
[8,94115],
[8,94325],
[2,94736],
[4,94930],
[2,95172],
[4,95549],
[1,97176],
[2,97366],
[4,97573],
[8,97782],
[4,98028],
[2,98390],
[4,98799],
[1,99223],
[4,99262],
[4,99415],
[1,99458],
[8,99676],
[2,99690],
[4,100229],
[2,101307],
[2,101542],
[2,101763],
[2,102195],
[4,102758],
[4,102988],
[4,103212],
[1,103593],
[1,103825],
[2,104229],
[4,104436],
[2,105902],
[4,106103],
[8,106311],
[8,106917],
[8,107101],
[8,107334],
[8,107539],
[2,107955],
[4,108371],
[1,108818],
[1,109417],
[2,110436],
[4,110596],
[8,110805],
[8,111008],
[8,111236],
[8,111621],
[1,111661],
[8,112055],
[1,112090],
[1,113115],
[2,113121],
[2,113337],
[1,113345],
[4,113764],
[2,113769],
[8,114153],
[1,114219],
[8,114511],
[1,114521],
[8,114921],
[1,114926],
[2,115375],
[4,115377],
[2,116481],
[4,117036],
[1,117709],
[1,117902],
[2,118390],
[4,118745],
[2,118946],
[4,119120],
[2,119505],
[1,120190],
[4,120384],
[1,120608],
[4,120792],
[1,121253],
[1,125090],
[2,125570],
[2,126378],
[1,126967],
[1,127379],
[2,128463],
[1,128857],
[2,129712],
[1,130322],
[1,130702],
[2,131804],
[1,132213],
[2,133008],
[1,133637],
[1,134052],
[2,135018],
[1,135463],
[2,136328],
[1,136962],
[1,137321],
[2,138332],
[1,138750],
[2,139641],
[1,140217],
[1,140750],
[2,141628],
[1,142092],
[2,142898],
[1,143559],
[1,143983],
[2,144562],
[1,145225],
[2,146253],
[2,147355],
[2,147943],
[2,148736],
[2,149567],
[2,150898],
[2,151302],
[2,151898],
[2,152881],
[2,154166],
[2,154561],
[2,155198],
[2,156200],
[4,156802],
[4,157254],
[2,157884],
[4,158463],
[4,158838],
[8,159307],
[8,160596],
[8,161179],
[4,161812],
[2,162315],
[4,162499],
[8,162684],
[2,163243],
[2,163624],
[2,163796],
[2,164252],
[4,164453],
[2,164643],
[4,164825],
[4,165088],
[2,166710],
[2,166903],
[2,167101],
[2,167301],
[4,167561],
[4,167992],
[4,168437],
[2,168731],
[4,168940],
[2,169170],
[2,169759],
[2,170846],
[2,171031],
[2,171346],
[2,171769],
[2,172342],
[2,172570],
[2,172759],
[2,173186],
[4,173403],
[4,173774],
[8,173967],
[2,175371],
[4,175578],
[8,175776],
[8,176388],
[2,176648],
[2,176844],
[2,177032],
[4,177470],
[2,177909],
[4,178386],
[4,178992],
[2,180014],
[2,180197],
[2,180386],
[2,180585],
[2,180769],
[2,181125],
[2,181608],
[4,182601],
[1,182610],
[4,182843],
[1,182853],
[4,183285],
[1,183290],
[8,183690],
[2,183700],
[1,184057],
[4,184067],
[8,184476],
[2,184514],
[8,184907],
[2,184913],
[2,185976],
[4,186588],
[8,187149],
[2,188045],
[4,188275],
[8,188467],
[8,188640],
[8,189063],
[2,189640],
[4,189832],
[8,190049],
[2,190855],
[4,191389],
[2,191624],
[4,191808],
]
}


/////////////////
//PreBoot state//
/////////////////

var PrebootState = {

    preload:function() {
        this.load.spritesheet('load', 'assets/LoadScreen.png', 800, 600);
    },
    create:function() {
        this.state.start('PreloadState');
    },

}

/////////////////
//Preload state//
/////////////////

var PreloadState = {
    preload: function() {

        this.load = this.add.sprite(0, 0, 'load');
        this.load.animations.add('loading', [0,1,2,3,4,5], 12, true);
        this.load.animations.play('loading');

        this.add.text(game.width/2-50, game.height-40, 'Loading...', { fill: '#0c493b', font: '20pt New' })

        //load image assets
        game.load.image('arrowUp', 'assets/UpArrow.png');
        game.load.image('arrowDown', 'assets/DownArrow.png');
        game.load.image('arrowLeft', 'assets/LeftArrow.png');
        game.load.image('arrowRight', 'assets/RightArrow.png');
        game.load.image('background', 'assets/Background.png');
        game.load.image('killzone', 'assets/Killzone.png');

        game.load.spritesheet('upOutline','assets/UpArrow_outline.png', 98, 96);
        game.load.spritesheet('rightOutline','assets/RightArrow_outline.png', 96, 98);
        game.load.spritesheet('downOutline','assets/DownArrow_outline.png', 98, 96);
        game.load.spritesheet('leftOutline','assets/LeftArrow_outline.png', 96, 98);

        //load audio assets
        game.load.audio('song1', [songData.url + '.ogg', songData.url + '.mp3']);
    },

    update:function(){
        if (this.cache.isSoundDecoded('song1'))
        {
            this.state.start('GameState');
        }
    }
}

//////////////
//Game State//
//////////////

var GameState = { preload: preload, create: create, update: update };

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('PrebootState', PrebootState);
game.state.add('PreloadState', PreloadState);
game.state.add('GameState', GameState);
game.state.start('PrebootState');

var LeftArrows;
var DownArrows;
var UpArrows;
var RightArrows;
var score = 0;
var scoreText;
var killzone;

var songSpeed = -200;

var song;

function preload() {

    game.stage.disableVisibilityChange = true;
}

function create() {
    //start playing the song after 2 seconds
    game.time.events.add(2 * Phaser.Timer.SECOND, startMusic, this);

    

    //set up the physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //add in the background
    game.add.sprite(0,0,'background');

    //set up the zone to destroy outstanding arrows
    killzone = game.add.sprite(0, -65, 'killzone');
    game.physics.arcade.enable(killzone);

    //adding outlines to the canvas
    outlines = game.add.group();
    outlines.enableBody = true;
    leftOutline = outlines.create(150, 15, 'leftOutline');
    leftOutline.scale.setTo(.75,.75);
    downOutline = outlines.create(293, 15, 'downOutline');
    downOutline.scale.setTo(.75,.75);
    upOutline = outlines.create(436, 15, 'upOutline');
    upOutline.scale.setTo(.75,.75);
    rightOutline = outlines.create(581, 15, 'rightOutline');
    rightOutline.scale.setTo(.75,.75);

    //creating respective groups for the different arrows
    LeftArrows = game.add.group();
    LeftArrows.enableBody = true;

    DownArrows = game.add.group();
    DownArrows.enableBody = true;

    UpArrows = game.add.group();
    UpArrows.enableBody = true;

    RightArrows = game.add.group();
    RightArrows.enableBody = true;

    scoreText = game.add.text(10, game.world.height-40, 'Score: 0', { fontSize: '32px', fill: '#e9f6fd', font: '32pt New' });


    //creating key press events for H,J,K,L
    var tempKey = game.input.keyboard.addKey(Phaser.Keyboard.H);
    tempKey.onDown.add(HPress);
    tempKey.onUp.add(HUnpress);

    var tempKey = game.input.keyboard.addKey(Phaser.Keyboard.J);
    tempKey.onDown.add(JPress);
    tempKey.onUp.add(JUnpress);

    var tempKey = game.input.keyboard.addKey(Phaser.Keyboard.K);
    tempKey.onDown.add(KPress);
    tempKey.onUp.add(KUnpress);

    var tempKey = game.input.keyboard.addKey(Phaser.Keyboard.L);
    tempKey.onDown.add(LPress);
    tempKey.onUp.add(LUnpress);

    var timeDif = ((game.world.height - 17) / (songSpeed*2) + 2) * Phaser.Timer.SECOND;

    console.log("timedif is " + timeDif); 
    //set timers for all the arrows given for the song
    /*for(var i = 0; i < songData.data.length; i++){
        if(songData.data[i].arrow & 8){
            game.time.events.add(songData.data[i].time, createLeft, this);
        }
        if(songData.data[i].arrow & 4){
            game.time.events.add(songData.data[i].time, createDown, this);
        }
        if(songData.data[i].arrow & 2){
            game.time.events.add(songData.data[i].time, createUp, this);
        }
        if(songData.data[i].arrow & 1){
            game.time.events.add(songData.data[i].time, createRight, this);
        }
    }*/

    for(var i = 0; i < songData.data.length; i++){
        if(songData.data[i][0] & 8){
            game.time.events.add(songData.data[i][1] + timeDif, createLeft, this);
        }
        if(songData.data[i][0] & 4){
            game.time.events.add(songData.data[i][1] + timeDif, createDown, this);
        }
        if(songData.data[i][0] & 2){
            game.time.events.add(songData.data[i][1] + timeDif, createUp, this);
        }
        if(songData.data[i][0] & 1){
            game.time.events.add(songData.data[i][1] + timeDif, createRight, this);
        }
    }

    game.time.events.add(songData.data[songData.data.length-1][1] + 5 * Phaser.Timer.SECOND - timeDif, endLevel, this);

}

function startMusic(){
    song = game.sound.play('song1');
}
function HPress(){
    var foundArrow = 0;
    LeftArrows.forEachAlive(function(arrow){
        if(foundArrow===0){
            //max points
            if(Math.abs(arrow.y-15)/15>0 && Math.abs(arrow.y-15)/15<=.6){
                score += 7;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(0);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
            //medium points
            else if(Math.abs(arrow.y-15)/15>.6 && Math.abs(arrow.y-15)/15<=1.2){
                score += 4;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(0);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
            //min points
            else if(Math.abs(arrow.y-15)/15>1.2 && Math.abs(arrow.y-15)/15<=2.5){
                score += 2;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(0);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
        }
    }, this);
    if(foundArrow == 0){
        score -= 1;
        scoreText.text = 'Score: ' + score;
    }
}

function JPress(){
    var foundArrow = 0;
    DownArrows.forEachAlive(function(arrow){
        if(foundArrow===0){
            //max points
            if(Math.abs(arrow.y-15)/15>0 && Math.abs(arrow.y-15)/15<=.6){
                score += 7;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(1);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
            //medium points
            else if(Math.abs(arrow.y-15)/15>.6 && Math.abs(arrow.y-15)/15<=1.2){
                score += 4;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(1);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
            //min points
            else if(Math.abs(arrow.y-15)/15>1.2 && Math.abs(arrow.y-15)/15<=2.5){
                score += 2;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(1);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
        }
    }, this);
    if(foundArrow == 0){
        score -= 1;
        scoreText.text = 'Score: ' + score;
    }
}

function KPress(){
    var foundArrow = 0;
    UpArrows.forEachAlive(function(arrow){
        if(foundArrow===0){
            //max points
            if(Math.abs(arrow.y-15)/15>0 && Math.abs(arrow.y-15)/15<=.6){
                score += 7;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(2);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
            //medium points
            else if(Math.abs(arrow.y-15)/15>.6 && Math.abs(arrow.y-15)/15<=1.2){
                score += 4;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(2);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
            //min points
            else if(Math.abs(arrow.y-15)/15>1.2 && Math.abs(arrow.y-15)/15<=2.5){
                score += 2;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(2);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
        }
    }, this);
    if(foundArrow == 0){
        score -= 1;
        scoreText.text = 'Score: ' + score;
    }
}

function LPress(){
    var foundArrow = 0;
    RightArrows.forEachAlive(function(arrow){
        if(foundArrow===0){
            //max points
            if(Math.abs(arrow.y-15)/15>0 && Math.abs(arrow.y-15)/15<=.6){
                score += 7;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(3);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
            //medium points
            else if(Math.abs(arrow.y-15)/15>.6 && Math.abs(arrow.y-15)/15<=1.2){
                score += 4;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(3);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
            //min points
            else if(Math.abs(arrow.y-15)/15>1.2 && Math.abs(arrow.y-15)/15<=2.5){
                score += 2;
                scoreText.text = 'Score: ' + score;
                arrow.kill();
                foundArrow = 1;

                //getting arrow outline to change color
                outline = outlines.getChildAt(3);
                outline.frame = 1;
                outline.scale.setTo(.75,.75);
            }
        }
    }, this);
    if(foundArrow == 0){
        score -= 1;
        scoreText.text = 'Score: ' + score;
    }
}

function HUnpress(){
    //getting arrow outline to change color
    outline = outlines.getChildAt(0);
    outline.frame = 0;
    outline.scale.setTo(.75,.75);
}

function JUnpress(){
    //getting arrow outline to change color
    outline = outlines.getChildAt(1);
    outline.frame = 0;
    outline.scale.setTo(.75,.75);
}

function KUnpress(){
    //getting arrow outline to change color
    outline = outlines.getChildAt(2);
    outline.frame = 0;
    outline.scale.setTo(.75,.75);
}

function LUnpress(){
    //getting arrow outline to change color
    outline = outlines.getChildAt(3);
    outline.frame = 0;
    outline.scale.setTo(.75,.75);
}

function createLeft(){
    var newArrow = LeftArrows.create(155, game.world.height+ 32, 'arrowLeft');
    newArrow.scale.setTo(.65,.65);
    newArrow.body.velocity.y = songSpeed;
}

function createDown(){
    var newArrow = DownArrows.create(298, game.world.height+ 32, 'arrowDown');
    newArrow.scale.setTo(.65,.65);
    newArrow.body.velocity.y = songSpeed;
}

function createUp(){
    var newArrow = UpArrows.create(441, game.world.height+ 32, 'arrowUp');
    newArrow.scale.setTo(.65,.65);
    newArrow.body.velocity.y = songSpeed;
}

function createRight(){
    var newArrow = RightArrows.create(586, game.world.height+ 32, 'arrowRight');
    newArrow.scale.setTo(.65,.65);
    newArrow.body.velocity.y = songSpeed;
}

function update() {
    game.physics.arcade.overlap(killzone, LeftArrows, destroyArrow, null, this);
    game.physics.arcade.overlap(killzone, UpArrows, destroyArrow, null, this);
    game.physics.arcade.overlap(killzone, DownArrows, destroyArrow, null, this);
    game.physics.arcade.overlap(killzone, RightArrows, destroyArrow, null, this);

}

function endLevel(){
    $(document).ready(function() {
        $.post(
            '/updateplayer',
            { 'sname' : songData.songName , 'score' : score }
        );
    });
}

function destroyArrow (killzone, arrow) {
    arrow.destroy();
    score -= 5;
    scoreText.text = 'Score: ' + score;
}