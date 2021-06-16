const DATADETAIL = [
    {
        id: 3, 
        mkid: 4244, 
        description: "Mata kuliah ini membahas komponen-komponen komputer meliputi peralatan masukan, keluaran, pemroses, dan penyimpanan data, perangkat lunak meliputi perangkat lunak aplikasi, sistem operasi dan program utilitas, basis  data, sistem informasi, dasar-dasar jaringan komputer dan internet serta keamanan komputer. Setelah menyelesaikan mata kuliah ini, mahasiswa dapat menjelaskan fungsi komputer, perangkat keras dan perangkat lunak komputer, dasar-dasar jaringan komputer dan internet, serta dapat menggunakan sistem operasi, program utilitas, dan perangkat lunak aplikasi sesuai kompetensi yang diperlukan oleh mayor masing-masing mahasiswa.",
        pras: "-"
    },
    {
        id: 4, 
        mkid: 4252, 
        description: "Mata kuliah ini membahas prinsip dasar mencacah, logika, teori himpunan, relasi dan fungsi, notasi sigma dan phi, prinsip induksi, sifat bilangan bulat, pengantar teori komputasi, relasi rekursif dan pengantar teori graf, serta algoritme dasar pada graf. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat memahami dan mampu menerapkan materi matematika diskret dalam menyusun dan menganalisis algoritme, memahami terminologi dalam teori komputasi, serta melakukan penelusuran terhadap algoritme pada graf.",
        pras: "MAT100"
    },
    {
        id: 5, 
        mkid: 4245, 
        description: "Mata kuliah ini menjelaskan pengertian algoritme, kontruksi algoritme, pengantar pemrograman yang meliputi konsep pemrograman, dasar-dasar algoritme, struktur program (kata kunci, operator, tipe data), struktur kontrol program (kondisional dan perulangan), fungsi, larik dan string, structure, dan I/O file. Setelah menyelesaikan perkuliahan ini, mahasiswa mampu menuliskan algoritme untuk menyelesaikan masalah komputasi sederhana, dan menuliskannya dalam bentuk program komputer dengan menggunakan bahasa pemrograman tingkat tinggi.",
        pras: "-"
    },
    {
        id: 6, 
        mkid: 4243, 
        description: "Mata kuliah ini merupakan lanjutan dari KOM101, menjelaskan tentang pembuatan program komputer yang terstruktur dan optimal dengan menggunakan struktur data yang sesuai, meliputi larik (array) dan string, pointer, structure and union, I/O file, preprocessor, dan library function. Setelah menyelesaikan perkuliahan ini, mahasiswa diharapkan mampu memprogram komputer yang efisien dan terstruktur dengan menggunakan bahasa pemrograman C.",
        pras: "KOM101"
    },
    {
        id: 7, 
        mkid: 4246, 
        description: "Mata kuliah ini membahas sistem-sistem bilangan, bentuk-bentuk kode biner, pengertian logika biner, bentuk dan cara kerja gerbang logika, Postulat Huntington dan teori dasar Aljabar Boolean, penyederhanaan fungsi Boolean menggunakan teori dasar Aljabar Boolean dan Karnaugh Map (K-Map), jenisjenis rangkaian terintegrasi, rangkaian kombinasional, rangkaian sekuensial, serta cara kerja pencacah dan elemen penyimpan (register). Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan mampu merancang rangkaian kombinasional dan sekuensial, menggunakan gerbang logika dalam rangkaian elektronika sederhana, serta memahami dan menerapkan operasioperasi logika biner sebagai dasar dari perancangan komputer.",
        pras: "-"
    },
    {
        id: 8, 
        mkid: 9289, 
        description: "Mata kuliah ini akan membahas topik-topik fundamental pada kalkulus, serta penerapannya dalam masalah komputasi sederhana. Topik-topik fundamental pada kalkulus yang dibahas mencakup pengenalan fungsi, terkait himpunan fungsi dengan single variabel dan multivariabel, terminologi penurunan fungsi dan penerapannya, terminologi penurunan fungsi multi variabel serta pengenalan metode-metode untuk menyelesaikan solusi dari fungsi tanpa kendala dan fungsi dengan suatu kendala. Setelah mengikuti perkuliahan ini, mahasiswa dapat menerapkan konsep-konsep pada fungsi multivariabel, turunan parsial, turunan berarah, dan gradien vektor, serta optimalisasi berkendala pada permasalahan di bidang ilmu komputer, di antaranya adalah algoritme pembelajaran, dan implementasinya menggunakan bahasa pemrograman seperti R.",
        pras: "MAT103"
    },
    {
        id: 9, 
        mkid: 4248, 
        description: "Mata kuliah ini membahas perbandingan antara penyimpanan data dengan sistem file dan basis data, pandangan umum mengenai sistem basis data, model basis data, model entity relationship (ER), model relasional, aljabar relasional, normalisasi, structured query language (SQL), pemrograman basis data menggunakan stored procedure dan trigger, serta perancangan basis data dan implementasi basis data dalam berbagai kasus. Setelah mengambil mata kuliah ini, mahasiswa diharapkan mampu menjelaskan konsep-konsep dasar dalam basis data dengan penekanan pada model relasional serta mampu merancang dan mengembangkan sistem basis data, optimasi kueri, stored procedure, dan trigger.", 
        pras: "-"
    },
    {
        id: 10, 
        mkid: 11682, 
        description: "Mata kuliah ini membahas karakteristik sistem komputer modern ditinjau dari struktur, fungsi dan interkoneksi komponen-komponen utama komputer yaitu prosesor, memori, dan perangkat masukan/keluaran, termasuk penggunaan bahasa rakitan. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan mampu menjelaskan prinsip dan cara kerja sistem komputer modern ditinjau dari struktur dan fungsinya, mengorganisasikan komponen-komponen komputer sederhana dan membuat program dalam bahasa rakitan sederhana.", 
        pras: "KOM203"
    },
    {
        id: 11, 
        mkid: 4250, 
        description: "Mata kuliah ini membahas abstraksi data dalam sebuah struktur untuk menunjang pengolahan/pemrosesan data dalam komputer serta beberapa algoritme penting yang terkait dengan pengolahan dan abstraksi data, seperti pengurutan, fungsi hash, dan penghitungan rekursif. Setelah menyelesaikan mata kuliah ini, mahasiswa dapat menjelaskan dan mengimplementasikan konsep struktur data dan aplikasinya, serta mengenali dan memahami penggunaan algoritme penting yang dapat diterapkan pada struktur data tingkat lanjut.", 
        pras: "KOM209, KOM200"
    },
    {
        id: 12, 
        mkid: 4247, 
        description: "Mata kuliah ini membahas prinsip-prinsip perancangan bahasa pemrograman meliputi sintaks, penamaan, tipe, semantik, dan fungsi, paradigma bahasa pemrograman, meliputi pemrograman imperatif, pemrograman fungsional, pemrograman logika, dan pemrograman berorientasi objek, perbandingan prinsip dasar dan implementasi berbagai paradigma bahasa pemrograman. Setelah menyelesaikan mata kuliah ini, mahasiswa mampu memahami prinsip dasar pemrograman imperatif, pemrograman fungsional, pemrograman logika, dan pemrograman berorientasi objek serta menerapkannya untuk menyelesaikan permasalahan komputasi.", 
        pras: "KOM200"
    },
    {
        id: 13, 
        mkid: 4263, 
        description: "Mata kuliah ini membahas teori-teori dasar yang melandasi interaksi manusia dan komputer, prinsip-prinsip dan penerapan interaksi manusia-komputer untuk perancangan antarmuka pengguna, kepentingan dan peran usability dan evaluasi pada perancangan sistem, isu-isu yang berkaitan dengan keragaman pengguna, tipe sistem yang berbeda, gaya interaksi, alat dan lingkungan. Setelah menyelesaikan mata kuliah ini, mahasiswa mampu menjelaskan teoriteori dasar dan menerapkan prinsip-prinsip interaksi manusia-komputer untuk merancang antarmuka pengguna, menjelaskan dan menerapkan peran usability dan evaluasi pada perancangan sistem, dan menjelaskan isu-isu yang terkait dengan perancangan antarmuka pengguna.", 
        pras: "-"
    },
    {
        id: 14, 
        mkid: 4261, 
        description: "Mata kuliah ini membahas pentingnya rekayasa perangkat lunak, definisi perangkat lunak, metode pengembangan perangkat lunak berorientasi proses dan berorientasi objek, tahapan dalam rekayasa perangkat lunak yang meliputi analisis kebutuhan, pemodelan hasil analisis, perancangan, implementasi dengan teknik pemrograman yang dipilih, pengujian baik secara black box maupun white box dan perawatan. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan mampu mengembangkan perangkat lunak secara sistematis dan terukur dengan mengimplementasikan metode-metode pengembangan perangkat lunak terutama pengembangan berorientasi proses.", 
        pras: "KOM200/KOM202"
    },
    {
        id: 15, 
        mkid: 5194, 
        description: "Mata kuliah ini membahas prinsip-prinsip dasar metode numerik, perancangan dan analisis algoritme untuk metode-metode numerik dalam penyelesaian masalah komputasi numerik, serta mengimplementasikan algoritme tersebut secara efisien dengan menggunakan bahasa pemrograman tertentu. Prinsipprinsip dasar metode numerik yang dibahas yaitu prinsip-prinsip komputasi digital, representasi bilangan dan operasi aritmetika, error dan propagasi error, data analisis menggunakan interpolasi, ekstrapolasi, dan curve-fitting, penyelesaian numerik untuk sistem persamaan linear, teknik pencarian akar pada persamaan non-linear, teknik-teknik numerik untuk penyelesaian turunan, integral dan persamaan diferensial biasa. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan mampu memahami prinsip-prinsip dasar metode numerik, membangun dan menganalisis algoritme untuk metodemetode numerik, serta mengimplementasikan algoritme tersebut secara efisien.", 
        pras: "KOM200"
    },
    {
        id: 16, 
        mkid: 4259, 
        description: "Mata kuliah ini membahas mengenai dasar dan teknik analisis dalam perancangan percobaan, teknik pengumpulan data, teknik pemodelan linear, teknik reduksi dimensi dan clustering, pengantar jaringan syaraf tiruan, pengantar logika fuzzy dan fungsi kernel untuk pendugaan parameter. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat memahami dan mampu menerapkan metode-metode kuantitatif dalam permasalahan bidang komputer, seperti prinsip dan analisis dalam merancang percobaan, prinsipprinsip pengumpulan data, teknik dalam pemodelan linear, pereduksian dimensi serta konsep jarak dan clustering, pendugaan fungsi kepekatan bebas sebaran, serta prinsip jaringan syaraf tiruan dan logika fuzzy.", 
        pras: "STK202"
    },
    {
        id: 17, 
        mkid: 4272, 
        description: "Mata kuliah ini menjelaskan teknik-teknik perancangan algoritme yang meliputi kriteria kebaikan suatu algoritme, laju pertumbuhan fungsi, fungsi rekursif, teknik divide and conquer, teknik greedy, pemrograman dinamis, teknik penelusuran ke belakang, serta pengantar teori NP-Complete. Setelah menyelesaikan mata kuliah ini, mahasiswa dapat merancang dan menganalisis algoritme yang efisien untuk menyelesaikan masalah komputasi.", 
        pras: "KOM209, KOM200"
    },
    {
        id: 18, 
        mkid: 4256, 
        description: "Mata kuliah ini membahas elemen dasar sistem komputer dan eksekusi instruksi, struktur sistem operasi, manajemen proses, pemrograman multithreaded, penjadwalan proses, sinkronisasi, masalah deadlock dan penanganannya, manajemen memori yang mencakup swap memory, paging, segmentasi, serta virtual memory, manajemen penyimpanan, file system, dan manajemen I/O. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat menjelaskan pengaruh keputusan perancangan sistem operasi terhadap kinerja komputer dan melakukan manajemen proses dan pemrograman multithreading dengan menggunakan system call.", 
        pras: "KOM206"
    },
    {
        id: 19, 
        mkid: 5189, 
        description: "Mata kuliah ini membahas teknik grafis komputer meliputi perangkat keras, algoritme, teknik pemrograman grafis untuk visualisasi simulasi, algoritme rasterisasi garis, transformasi, macam-macam proyeksi, representasi obyek 3D, pembuatan obyek dengan fraktal dan sistem partikel, konsep warna, pencahayaan, pemetaan tekstur, animasi, dan teknik interaktif. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat memiliki pemahaman tentang prinsip-prinsip, algoritme, dan konsep matematis dalam pembuatan sistem grafika komputer interaktif dan mampu mengimplementasikannya menjadi suatu aplikasi kompetitif.", 
        pras: "MAT219"
    },
    {
        id: 20, 
        mkid: 12134, 
        description: "Mata kuliah ini membahas mengenai posisi dan ruang lingkup kecerdasan buatan, agen rasional, berbagai metode searching, representasi pengetahuan, dan matching, serta teknik representasi dan penalaran berbasis peluang (bayesian network, decision network, dan decicion tree). Setelah menyelesaikan mata kuliah ini, mahasiswa dapat memahami dan mampu menyebutkan definisi serta state of the art dari kecerdasan buatan, menjelaskan berbagai prinsip kecerdasan buatan, seperti spesifikasi agen rasional, solusi permasalahan (searching, informed search, dan game), representasi pengetahuan dan penalaran berbasis logika, planning dan acting, serta penalaran berbasis konsep ketidakpastian.", 
        pras: "KOM209, KOM200"
    },
    {
        id: 21, 
        mkid: 4265, 
        description: "Mata kuliah ini membahas pengertian sistem informasi (SI), peranan SI dalam organisasi, tipe SI berdasarkan tingkatan organisasi dan area fungsional, tahap pengembangan SI, isu-isu (etika, sosial dan politik) yang muncul dari penerapan SI, infrastruktur teknologi informasi (perangkat keras, perangkat lunak, data dan jaringan komunikasi), dan integrasi proses bisnis. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat menjelaskan konsep-konsep terkait sistem informasi dan selanjutnya mampu memberikan analisis solusi sistem informasi untuk keperluan bisnis sesuai tingkatan manajemen dan permasalahan yang dibutuhkan oleh suatu organisasi.", 
        pras: "-"
    },
    {
        id: 22, 
        mkid: 4262, 
        description: "Mata kuliah ini membahas pengertian data mining, data dan eksplorasi data, praproses data, teknik-teknik dasar dalam clustering dan deteksi pencilan, teknik-teknik dasar klasifikasi, teknik-teknik dasar dalam association rule mining, pengertian data warehouse dan online analytical processing (OLAP), pengenalan teknik-teknik data mining dalam tipe data lainnya mencakup data spasial, spatio-temporal, sekuens, web, dan teks. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat menerapkan teknik-teknik praproses data sebagai tahap awal dalam data mining dan menerapkan algoritmealgoritme dasar dalam clustering, deteksi pencilan, klasifikasi, dan aturan asosiasi untuk permasalahan data mining yang diberikan.", 
        pras: "STK211, KOM205"
    },
    {
        id: 23, 
        mkid: 4257, 
        description: "Mata kuliah ini membahas jaringan komputer dan layanannya, teknik-teknik switching dan routing, aplikasi-aplikasi Internet (web, mail, FTP, proxy, DNS), tipe-tipe layanan, pemrograman socket, dasar-dasar sistem komunikasi analog dan digital, sistem transmisi, komunikasi sinkron / asinkron, komunikasi simetrik / asimetrik, arsitektur dan protokol jaringan, model referensi OSI, standar LAN, peer-to-peer, TCP/IP, keamanan, arsitektur jaringan lanjut, serta dasar-dasar manajemen jaringan dan QoS berbasis SNMP. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan mampu mengimplementasikan konsep dan landasan-landasan dasar komunikasi data dan jaringan komputer dengan membangun sistem jaringan komputer sederhana, serta mengimplementasikan teknologi telekomunikasi dan internet secara praktis agar siap untuk bersaing di industri teknologi informasi dan komunikasi (TIK).", 
        pras: "KOM311"
    },
    {
        id: 24, 
        mkid: 4264, 
        description: "Mata kuliah ini menjelaskan konsep-konsep dan teknik-teknik pengembangan sistem berorientasi objek meliputi objek, kelas, konsep enkapsulasi, pewarisan, penyembunyian informasi, polimorfisme, analisis dan perancangan berorientasi objek menggunakan Unified Modelling Language, pola perancangan, antipola, pengujian sistem berorientasi objek persistensi objek, dan ukuran kebaikan berorientasi objek. Setelah menyelesaikan mata kuliah ini, mahasiswa mampu mengimplementasikan metode pengembangan berorientasi objek berikut pengujiannya.", 
        pras: "KOM200"
    },
    {
        id: 25, 
        mkid: 5192, 
        description: "Mata kuliah ini membahas konsep pembelajaran mesin dengan pendekatan algoritmik. Konsep-konsep yang dibahas meliputi paradigma kecerdasan komputasional (jaringan syaraf tiruan: MLP, Radial Basis, SOM dan LVQ; sistem fuzzy; optimasi berbasis kecerdasan koloni dan evolusi), teknik klasifikasi berbasis transformasi dan optimisasi berkendala (support vector machine), dan teknik prediksi dengan simulasi Monte Carlo. Setelah menyelesaikan mata kuliah ini mahasiswa dapat menjelaskan prinsip dalam pembelajaran mesin dan menyusun algoritme yang adaptif dan akurat menggunakan beberapa teknik dalam kecerdasan komputasional (jaringan syaraf tiruan, sistem logika fuzzy, jaringan syaraf tiruan dan kecerdasan koloni), teknik berbasis transformasi ruang (support vector machine), serta teknik berbasis peluang (Markov Chain Monte Carlo), baik untuk prediksi, maupun klasifikasi, dan diimplementasikan dengan paket perangkat lunak tertentu pada kasus aplikasi permasalahan praktis.", 
        pras: "KOM322"
    },
    {
        id: 26, 
        mkid: 5191, 
        description: "Mata kuliah ini membahas konsep-konsep protokol dan standar keamanan informasi yang mencakup pengenalan konsep keamanan data, kebijakan, serangan, kelemahan, metode atau perangkat kriptografi dan penyembunyian informasi, serta forensik digital. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan mampu menjelaskan prinsip dan teknik dasar pengamanan informasi serta merancang dan mengimplementasikan suatu protokol keamanan mendasar dalam sebuah sistem teknologi informasi dan komunikasi (TIK) secara praktis sesuai dengan perkembangan industri TIK saat ini.", 
        pras: "KOM209"
    },
    {
        id: 27, 
        mkid: 5193, 
        description: "Mata kuliah ini membahas karakteristik citra digital, pengolahan citra digital meliputi pembentukan citra, restorasi citra, peningkatan kualitas citra, transformasi citra dalam ruang frekuensi, kompresi citra, segmentasi citra, morfologi citra sebagai persiapan untuk pengenalan citra. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat memahami konsep fundamental pengolahan citra digital dan mampu mengaplikasikannya sesuai dengan kasus-kasus yang menggunakan citra sebagai objek uji.", 
        pras: "MAT219"
    },
    {
        id: 28, 
        mkid: 5190, 
        description: "Mata kuliah ini mencakup aspek-aspek yang terkait dengan kejahatan komputer dan keamanan komputer, pencurian perangkat lunak dan hak kekayaan intelektual, gangguan terhadap komputer dan sistem informasi, invasi privasi di tempat kerja dan internet, implikasi sosial terkait kecerdasan buatan dan sistem pakar, serta masalah-masalah pemasaran teknologi informasi. Setelah menyelesaikan mata kuliah ini, diharapkan mahasiswa mampu mengidentifikasi dan mendefinisikan komponen rencana terstruktur untuk memecahkan masalah etika profesi yang berkaitan dengan komputasi serta mampu membuat keputusan dan penyelesaian untuk masalah tersebut.", 
        pras: "-"
    },
    {
        id: 29, 
        mkid: 5195, 
        description: "Mata kuliah ini membahas karakteristik sistem perangkat lunak dan prinsipprinsip manajemen proyek yang meliputi requirements elicitation, pendugaan usaha pengembangan perangkat lunak, etika profesi, pengendalian kualitas, perencanaan dan penjadwalan dalam daur hidup proses perangkat lunak, kerja tim dan manajemen resiko. Setelah menyelesaikan mata kuliah ini, mahasiswa mampu mengelola pekerjaan (proyek) untuk pengembangan perangkat lunak sesuai dengan kebutuhan pengguna secara tepat guna, tepat waktu, dan tepat anggaran.", 
        pras: "KOM331"
    },
    {
        id: 30, 
        mkid: 4270, 
        description: "Mata kuliah ini membahas konsep dasar penelitian, identifikasi masalah dan hipotesis, perancangan dan metode penelitian, teknik penulisan karya dan artikel ilmiah serta teknik penyajian karya ilmiah yang profesional dan beretika. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat menghasilkan proposal penelitian tugas akhir dan karya ilmiah lainnya sesuai dengan panduan penulisan karya ilmiah serta mampu mengkomunikasikan karya ilmiah tersebut baik secara tertulis maupun lisan sebagai upaya penyebaran karya ilmiah yang dihasilkan.", 
        pras: "-"},
    {
        id: 31, 
        mkid: 4271, 
        description: "Dalam mata kuliah ini, mahasiswa menerapkan pengetahuan, keterampilan dan kemampuan bidang ilmu komputer untuk menyelesaikan permasalahan nyata di dunia kerja, serta dapat mengomunikasikan ide dan pemahaman terkait permasalahan tersebut secara lisan dan tertulis dengan rekan kerja dan atasan di instansi Praktik Kerja Lapangan (PKL) serta dosen dan mahasiswa lainnya. Topik yang didapat dari pengalaman kerja dapat diteruskan menjadi tugas akhir. Setelah mengikuti mata kuliah ini, mahasiswa diharapkan mampu menganalisis permasalahan nyata di dunia kerja dan menghasilkan penyelesaian masalah tersebut berdasarkan pengetahuan keilmuan komputer dan keterampilan di bidang teknologi komputer yang dimilikinya.", 
        pras: "Lulus seluruh mata kuliah mayor sampai dengan semester 5, dan telah mengambil seluruh mata kuliah mayor pada semester 6 dengan IPK 2.00 tanpa huruf mutu E."},
    {
        id: 32, 
        mkid: 4278, 
        description: "Dalam mata kuliah ini, mahasiswa menyampaikan usulan penelitian dari latar belakang hingga metode penelitian serta menerima masukan dari pembimbing dan mahasiswa lainnya terkait usulan penelitian. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan mampu mengomunikasikan proposal penelitiannya baik secara lisan maupun tertulis, serta dapat melaksanakan penelitian berdasarkan rumusan masalah, tujuan, metode dan jadwal penelitian yang tertuang dalam proposal tugas akhir.", 
        pras: "Lulus dalam seluruh mata kuliah sampai dengan semester 6, dengan IPK  2.00 tanpa huruf mutu E dan telah lulus Praktik Kerja Lapangan (KOM399)."},
    {
        id: 33, 
        mkid: 4279, 
        description: "Dalam mata kuliah ini, mahasiswa menyampaikan hasil penelitiannya dalam suatu forum seminar, menanggapi pertanyaan peserta, serta menerima masukan dan perbaikan dari peserta seminar. Topik seminar sesuai dengan topik penelitian tugas akhir yang telah mendapatkan persetujuan dari dosen pembimbing. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan mampu mengomunikasikan karya ilmiah sebagai hasil penelitiannya baik secara lisan maupun tertulis serta dapat menyelesaikan penulisan laporan tugas akhir dengan mempertimbangkan masukan dan saran dari peserta seminar.", 
        pras: "Lulus semua mata kuliah termasuk mata kuliah elektif kecuali mata kuliah Tugas Akhir (KOM499) dengan IPK  2.0 tanpa huruf mutu E."},
    {
        id: 34, 
        mkid: 4280, 
        description: "Mata kuliah ini dilaksanakan melalui penelitian di bawah bimbingan dosen pembimbing yang ditetapkan oleh Departemen. Penelitian yang dilakukan bertujuan untuk menyelesaikan permasalahan berbasis komputer. Topik penelitian yang dipilih oleh mahasiswa disesuaikan dengan mandat dari setiap Bagian yang ada di Departemen Ilmu Komputer. Tugas Akhir disajikan dalam bentuk karya tulis sebagai salah satu syarat kelulusan mahasiswa dari Program S1 Ilmu Komputer. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan mampu melaksanakan penelitian dalam menyelesaikan masalah di bidang ilmu komputer dan penerapannya di bidang lain berdasarkan pengetahuan keilmuan komputer serta mampu mengomunikasikan hasil penelitiannya secara tertulis dan lisan dalam bentuk karya dan presentasi Ilmiah.", 
        pras: "Telah lulus seluruh mata kuliah termasuk mata kuliah elektif dengan IPK 2.00 tanpa huruf mutu E."},
    {
        id: 35, 
        mkid: 5196, 
        description: "Mata kuliah ini membahas kebutuhan dan klasifikasi mesin paralel, komunikasi antar prosesor, memori persekutuan (shared memory), pengiriman pesan (message passing), jaringan interkoneksi (interconnection network), konstruksi algoritme paralel, efisiensi dan percepatan pemrosesan paralel, serta contoh aplikasinya. Setelah mengikuti kuliah ini, mahasiswa diharapkan mampu membuat program paralel untuk memecahkan kasus tertentu, serta pengenalan sistem terdistribusi.", 
        pras: "KOM312"},
    {
        id: 36, 
        mkid: 5197, 
        description: "Mata kuliah ini memberikan pengetahuan kepada mahasiswa untuk merancang dan membangun sebuah aplikasi sistem tertanam berbasis mikrokontroler dengan mengintegrasikan perangkat sensor/aktuator, antarmuka analog ke digital/digital ke analog dan masukan/keluaran, sistem operasi waktu nyata, serta aplikasi dari prinsip-prinsip dasar sistem kendali dalam proses otomasi dan robotika. Setelah menyelesaikan kuliah ini, mahasiswa diharapkan mampu menjelaskan berbagai perangkat mendasar dalam sistem tertanam dan robotika berbasis mikrokontroler, merancang dan membangun sebuah aplikasi sistem tertanam, robot, dan perangkat-perangkat cerdas sederhana lain berbasis mikrokontroler dan prinsip-prinsip dasar sistem kendali.", 
        pras: "KOM206"},
    {
        id: 37, 
        mkid: 4260, 
        description: "Mata kuliah ini membahas posisi sistem pakar pada kecerdasan buatan, definisi, ruang lingkup, karakteristik dan perkembangan sistem pakar, beda perangkat lunak sistem pakar dengan perangkat lunak konvensional, metodologi pengembangan sistem pakar, karakteristik seorang pakar, akuisisi pengetahuan, representasi pengetahuan, metode inferensi, metode penanganan ketidakpastian dengan certainty factor dan metode fuzzy serta fuzzy expert system. Pendekatan yang digunakan dalam pengembangan sistem pakar antara lain rule-based system, fuzzy-expert system, neural network dan evolutionary computation. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat mengembangkan aplikasi yang baik menggunakan perangkat lunak pengembang sistem pakar.", 
        pras: "KOM321"},
    {
        id: 38, 
        mkid: 4268, 
        description: "Mata kuliah ini menjelaskan teknologi yang digunakan untuk menangkap, menyimpan, melakukan query, menganalisis dan menampilkan data geospasial, teori tentang penentuan lokasi, sistem koordinat, pemodelan data spasial dan kartografi, serta sistem infomasi geografis (SIG) yang menerapkan arsitektur web-service. Setelah menyelesaikan mata kuliah ini, mahasiswa diharapkan dapat menggunakan perangkat lunak geospasial untuk menyelesaikan permasalahan keruangan khususnya dalam bidang pertanian dan bidang lain yang terkait, serta mampu membangun basis data spasial dan SIG berbasis web.", 
        pras: "KOM205"},
    {
        id: 39, 
        mkid: 12200, 
        description: "Mata kuliah ini menjelaskan pengantar temu kembali informasi (TKI), dasardasar temu kembali informasi : pemodelan, evaluasi, query, operasi teks dan  multimedia, indexing and searching. Topik dalam temu kembali informasi : relevance feedback, query expansion, text classification, text clustering, summarization, cross-language, question answering, web search, dan semantic web. Setelah mengikuti kuliah ini, mahasiswa diharapkan mampu menjelaskan dan mengembangkan temu kembali informasi, serta menerapkannya untuk membuat sistem aplikasi temu kembali informasi.", 
        pras: "STK202, KOM207"
    },
    {
        id: 40, 
        mkid: 27266, 
        description: "-", 
        pras: "-"
    },
]

export default DATADETAIL;