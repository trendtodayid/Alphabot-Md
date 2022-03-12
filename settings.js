const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "Gumoon Bot" //namabot kalian
global.ownername= "Rafli Rusdiana" //nama kalian
global.myweb ="http://klik.raflirusdiana.site" //bebas asal jan hapus
global.email = "raflirsadeli1407@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6285794659953" // nomor wa kalian
global.ownernomerr = "6285794659953" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6285794659953","6285794659953","6285794659953"] //ganti agar fitur owner bisa di gunakan
global.packname = 'Gumoon' //sticker wm ubah
global.author = 'Di Buat Oleh gumoon grup' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'Berhasil',
    admin: 'hallo @user, Perintah hanya bisa diaktifkan oleh *Admin*\nSilahkan tag admin untuk mengaktifkan fitur ini!',
    botAdmin: 'hallo @user, Perintah hanya bisa diaktifkan jika bot menjadi *admin*\nKami menyarankan *admin* untuk menjadikan bot *admin terlebih dahulu*\nFollow instagram @trendtoday.id!',
    owner: 'Perintah tersebut hanya bisa dilakukan oleh *pemilik bot*\nFollow instagram @trendtoday.id!',
    group: '@user melalukan perintah di private chat\nMaaf Fitur hanya bisa digunakan di *Group*\nFollow instagram @trendtoday.id!',
    private: '@user melalukan perintah di Group chat\nMaaf Fitur hanya bisa digunakan di *private*\nFollow instagram @trendtoday.id!',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: 'Permintaan @user sedang di proses\nSilahkan menunggu\n\n*Follow instagram @trendtoday.id!*',
	lockCmd: 'Fitur dinonaktifkan oleh pemilik bot!\nFollow instagram @trendtoday.id!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
