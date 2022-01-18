// database statis dengan javascript
function Message(firstName) {
  this.firstName = firstName;
}
var nama1 = new Message("SELAMAT !!!");
var nama2 = new Message("Data science dasar anda berhasil mendeteksi melakukan output baca");
var nama3 = new Message("Developed by : Arif Alexander");
console.table([nama1, nama2, nama3], [nama1,nama2,nama3]);
// Ketika Data Berhasil Ditampilkan
if(Message){
    console.log(500, "Data Berhasil Ditampilkan");
};
