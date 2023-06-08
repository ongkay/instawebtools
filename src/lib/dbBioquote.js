const quotes = [
  'Pemandangan terbaik datang setelah pendakian tersulit.',
  'Waktumu terbatas, jadi jangan sia-siakan untuk menjalani kehidupan orang lain.',
  'Sehijau padang rumput yang luas, persahabatan akan terus tumbuh selama masih ada kehidupan.',
  'Pejuang yang sukses adalah orang biasa, dengan fokus seperti laser.- Bruce Lee',
  'Keluarga adalah salah hal terpenting yang kita miliki, yang tak akan pernah berubah dan selalu ada ketika dibutuhkan.',
  ' Tiga hal penting dalam hidup: kesehatanmu, misimu, dan orang yang kamu cintai.- Naval Ravikant',
  'Kunci kesuksesan adalah fokus pada tujuan, bukan hambatan.',
  'Kesuksesan dan kegagalan adalah sama-sama bagian dalam hidup. Keduanya hanya sementara.- Shah Rukh Khan',
  'Hidup adalah petualangan ilahi.- Lailah Gifty Akita',
  'Bunga mawar dapat menjadi tamanku dan seorang sahabat bisa menjadi duniaku.',
  'Jangan pernah berubah cinta, perubahan itu hanya dimiliki oleh power rangers.',
  'Hidup adalah sebagian dari apa yang kita buat, dan sebagian apa yang dibuat oleh teman-teman yang kita pilih.',
  '20 tahun dari sekarang, kau mungkin lebih kecewa dengan hal-hal yang tidak sempat kau lakukan alih-alih yang sudah.- Mark Twain',
  'Kadang-kadang hidup seperti permainan, entah menang atau kalah tetapi kamu harus mengerahkan semua upaya terbaik.',
  'Kegagalan tidak akan pernah menyusul jika tekad untuk sukses cukup kuat.- Og Mandino',
  'Papan seterika sebenarnya adalah papan seluncur yang menyerah untuk mengejar mimpinya. Maka dari itu, janganlah menjadi papan seterika.”',
  'Sukses adalah wujud kesempurnaan hidup.- Dee Lestari',
  'Kebenaran terbesar adalah kejujuran, dan kepalsuan terbesar adalah ketidakjujuran.',
  'Janganlah engkau mengucapkan perkataan yang engkau sendiri tak suka mendengarnya jika orang lain mengucapkannya kepadamu.',
  'Hidup itu sangat sederhana, tapi kami bersikeras untuk membuatnya menjadi rumit.- Confusius',
  'Sahabat bagaikan roda yang terus berputar, yang membuat lokomotif itu terus berjalan.',
  'Cintai hidup yang kau jalani. Jalani hidup yang kau cintai. - Bob Marley',
  'Kamu tidak bisa pergi dari tanggung jawab esok hari dengan menghindarinya hari ini” - Abraham Lincoln',
  'Berbahagialah untuk saat ini. Saat ini adalah hidupmu.- Umar Khayyam',
  'Jika kamu ingin hidup bahagia, ikatlah pada tujuan, bukan pada orang atau benda.- Albert Einstein',
  'Katakan pada kehidupan anda, wahai hidup engkau memang keras dan tak mudah. Namun aku jauh lebih keras dan tak mudah dikalahkan”',
  'Hal terpenting dalam hidup adalah belajar bagaimana memberikan cinta, dan membiarkannya masuk.- Morrie Schwartz',
  'Hati menjadi resah dan gelisah ketika kita terbiasa berandai-andai dalam menyikapi persoalan hidup.',
  'Keluarga adalah kompas yang membimbing kita. Mereka adalah inspirasi untuk mencapai ketinggian yang luar biasa dan kenyamanan saat kita sesekali goya',
  'Makin keras kamu bekerja untuk sesuatu, makin besar perasaanmu saat mencapainya.',
  'Jadilah dirimu sendiri dan katakan apa yang kau rasakan, karena mereka yang peduli tidak penting, dan mereka yang peduli tidak keberatan.- Dr. Seuss',
  'Hal yang hebat tentang sahabat sejati ialah mereka membawa energi baru ke dalam jiwamu.',
  'Jangan pernah melupakan orang-orang yang sudah membantu saat kita sedang mengalami masalah yang besar. Mereka itu ialah keluarga.',
  'Mantan sebenarnya adalah ucapan yang halus dari kata bekas.',
  'Tindakan adalah kunci dasar untuk semua kesuksesan.',
  'Cinta memang identik dengan sebuah pengorbanan, tetapi kalau pengorbanan terus yang dilakukan itu bernama penderitaan.',
  'Kesenangan bermula dari kebersamaan bersama orang-orang terdekat, terutama keluarga.',
  'Hidup itu seperti mengendarai sepeda. Untuk menjaga keseimbanganmu, kamu harus terus bergerak.- Albert Einstein',
  'Dalam duka pasti ada suka. Jangan menyerah karena dengan putus asa kita tidak lebih dari pecundang”',
  'Kegagalan akan mengalahkan pecundang. Kegagalan akan menginspirasi pemenang.- Robert T. Kiyosak',
  'Hidup hanya bisa dipahami secara terbalik; tapi, harus dijalani ke depan.- Soren Kierkegaard',
  'Keharmonisan keluarga terletak pada sikap tanggung jawab dan terbangunnya komunikasi yang sehat di antara ahli keluarga.',
  'Kebahagiaan hidupmu bergantung pada kualitas pikiranmu.- Marcus Aurelius',
  'Gagal itu urusan nanti. Yg terpenting, kita berani untuk mencoba dan mencoba!”',
  'Cara terbaik untuk meramalkan masa depan ialah dengan cara menciptakannya.- Abraham Lincoln',
  'Kesuksesan dan kegagalan sama-sama bagian dari hidup. Keduanya sama-sama sementara.- Shahrukh Khan',
  'Kamu tidak akan pernah menjadi pecundang sampai kamu berhenti mencoba.- Mike Ditka',
  'Bersabarlah, karena kesabaran adalah sebuah pilar keimanan.- Umar bin Khattab',
  'Keluarga adalah tempat terbaik untuk kita belajar tentang sebuah pengorbanan.',
  'Keberhasilan dalam kehidupan hanya bisa didapatkan ketika seseorang mau berjuang dengan keras.',
  'Dunia ini ibarat bayangan. Kalau kau berusaha menangkapnya, ia akan lari. Tapi kalau kau membelakanginya, ia tak punya pilihan selain mengikutimu.',
  'Keluarga adalah tempat terbaik bagi kita untuk belajar tentang sebuah pengorbanan.',
  'Jangan iri atas keberhasilan oranglain, karena kamu tidak mengetahui apa yang telah ia korbankan ununtuk mencapai keberhasilannya itu.”',
  'Nikmatilah hal-hal kecil dalam hidup, karena suatu hari kamu akan melihat ke belakang dan menyadari itu adalah hal-hal besar.',
  'Beri nilai dari usahanya, jangan dari hasilnya. Baru kita bisa menilai kehidupan.- Albert Einstein',
  'Sahabat adalah seseorang yang menyampaikan kebenaran walau terkadang itu menyakitkan. Tapi itu dia lakukan demi kebaikan.',
  'Kenangan yang kita buat bersama keluarga adalah segalanya.',
  'Kamu boleh berpikir sebanak yang kamu mau, tetapi jangan pernah makan sebanyak yang kamu berpikir.',
  'Bersama keluarga, selalu saja terasa ramai dan damai, menyenangkan dan menenangkan.',
  'Sesuatu akan selalu selalu mustahil sampai kamu selesai melakukannya.- Nelson Mandela',
  'Lebih baik menjadi singa sehari daripada menjadi domba seumur hidup.- Elizabeth Kenny',
  'Kamu tidak bisa kembali dan mengubah hal-hal yang ada, tetapi kamu bisa belajar dari itu dan mengambil tindakan sekarang.',
  'Kecerdasan yang paling cerdas adalah takwa, dan kebodohan yang paling bodoh adalah maksiat.',
  'Genggam duniamu, akhirat meninggalkanmu. Genggam akhiratmu, niscaya dunia datang padamu.',
  'Hidup adalah kumpulan momen yang kamu simpan di hatimu.',
  'Jangan pernah biarkan kesedihan masa lalumu membuatmu merusak kebahagiaan saat ini.',
  'Satu-satunya batu karang yang aku tahu tetap stabil, satu-satunya institusi yang aku tahu berfungsi, adalah keluarga.',
  'Kehidupan yang baik adalah sebuah proses, bukan suatu keadaan yang ada dengan sendirinya. Kehidupan itu sendiri adalah arah, bukan tujuan.',
  'Jika mungkin aku bermuka dua. Muka manakah yang tengah aku pakai sekarang?. – Abraham Lincoln',
  'Persahabatan tidak butuh sahabat yang bisa mendampingi dari awal, tapi sahabat yang bisa mendampingi kita sampai akhir.',
  'Orang yang benar-benar hebat adalah orang yang membuat setiap orang merasa hebat.- G. K. Chesterton',
  'Sahabat sejati adalah orang yang mencintaimu meskipun telah mengenalmu dengan sebenar-benarnya, yaitu baik dan burukmu.',
  'Perlu kamu tahu tiga alasan yang membuat seseorang tidak disukai ialah otak yang kosong mlompong, omong kosong, dan juga dompet yang kosong.',
  'Jelajahi hal-hal baru dan belajar darinya karena hidup ini terlalu singkat.',
  'Jangan jadi org yg congkak. Pastikanlah bahwa kepala Anda tidak lebih tinggi dari topi Anda.”',
  'Hidup ini terdiri dari 10 persen apa yang terjadi padamu dan 90 persen bagaimana caramu menyikapinya.- Charles R. Swindoll',
  'Setiap orang punya jatah untuk gagal. Habiskan jatah gagalmu ketika kamu masih muda.',
  'Jika kamu hidup, kamu adalah orang yang kreatif.- Elizabeth Gilbert',
  'Jangan pernah menyesali sehari dalam hidupmu. Hari-hari baik memberimu kebahagiaan dan hari-hari buruk memberimu pengalaman.',
  'Ubah pikiranmu dan kamu mengubah dunia.- Norman Vincent Peale',
  'Kamu harus menangkap momen spesial dalam hidup yang akan memberikan kebahagiaan seumur hidup.',
  'Hidupku adalah pesanku.- Mahatma Gandhi',
  'Menunggu dan menanti itu berbeda, namun tidak ada yang menyenangkan.',
  'Hidup bukan tentang menemukan dirimu sendiri. Hidup adalah bagaimana membangun dirimu.- George Bernard Shaw',
  'Siapa yang menjauhkan diri dari sifat suka mengeluh maka berarti ia mengundang kebahagiaan.',
  'Sebelum menjadi kupu-kupu yang amat indah, betapa banyak waktu dan perjuangan serta metmorfose yang dilalui dalam kepompong.',
  'Terkadang hal-hal kecil membuat hidup layak dijalani.',
  'Keluarga adalah hal terpenting di dunia.',
  'Segala yang dapat kamu bayangkan adalah nyata.- Pablo Picasso',
  'Jagalah shalatmu. Karena saat kamu kehilangan shalat, maka kamu akan kehilangan segalanya.- Umar bin Khattab',
  'Maka sesungguhnya bersama kesulitan itu ada kemudahan.',
  'Wanita itu unik, mereka ingin kamu tahu bagaimana perasaannya tapi mereka tidak ingin mengatidakannya padamu.”',
  'Kamu dapat mengubah dirimu sendiri, kamu tidak harus bergantung pada orang lain untuk mengubah diri sendiri.',
  'Jangan anggap hatimu sepi, anggap saja sebagai istirahat.',
  'Datangnya kematian tidak menunggu hingga kamu akan menjadi lebih baik. Jadilah orang baik dan tunggulah kematian.',
  'Persahabatan itu melindungi seperti ayah, menyayangi seperti ibu, mendengar layaknya seorang kakak, dan mengerti layaknya seorang adik.',
  'Berpegang teguhlah pada kebenaran, bahkan meski kebenaran itu akan membunuhmu.',
  'Lebih baik menangis di tengah hujan sehingga tidak ada yang bisa mengerti bahwa kamu bahagia atau kesakitan.',
  'Jangan sampai mengucap kata menyerah jika masih ingin hidupmu terus berlanjut.',
  'Sebuah berkah bagi persahabatan yang bisa melakukan hal bodoh bersama.',
  'Keyakinan (iman) adalah di mana seharusnya tidak ada perbedaan antara perbuatan, perkataan, dan apa yang kamu pikirkan.- Umar bin Khattab',
  'Tuhan, tolong beri aku kesabaran. Kalau Engkau beri kekuatan, mungkin aku akan memukul orang itu tepat di wajahnya.”',
  'Jangan pernah berhenti menunjukkan kepada seseorang betapa mereka sangat berarti bagimu.',
  'Allah mampu mengubah situasi paling terpuruk menjadi momen terbaik dalam hidupmu.',
  'Saat hidup menutup pintu untukmu, buka lagi saja. Itu hanya pintu, itulah cara kerjanya.”',
  'Rumah adalah orang. Bukan tempat. Jika Anda kembali ke sana setelah orang-orang pergi, maka yang bisa Anda lihat hanyalah apa yang sudah tidak ada lg',
  'Anak-anak adalah satu kunci untuk menuju keberhasilan di dalam keluarga.',
  'Utamakanlah keluarga. Ingatlah saat semuanya runtuh dan gagal, keluarga adalah tempatmu kembali.',
  'Hidup itu seperti perburuan harta karun, Anda harus memecahkan teka-teki untuk mencapai harta karun.',
  'Di mana mana ada hal lucu, dari sana ke sini bahkan dari sini ke sana.',
  'Kehangatan dalam keluarga tidak diukur dari ukuran luas rumahnya, tapi luasnya kebahagiaan yang menempati.',
  'Ubah dirimu untuk kebaikan, bukan untuk orang lain.',
  'Ajaklah seseorang kepada Islam meski tanpa melalui kata-kata. Mereka bertanya, Bagaimana caranya?Dia menjawab, Dengan akhlakmu- Umar bin Khattab',
  'Jika kamu mencari satu orang yang akan mengubah hidupmu, lihatlah di cermin.',
  'Hidup hanya ada 2 sisi berbeda. Penderitaan dan Kebahagiaan, namun dari situlah kita menjadi kuat dan tegar.”',
  'Bermimpilah besar dan berani gagal.',
  'Mimpi adalah ilustrasi dari buku yang ditulis jiwamu tentangmu.',
  ' Salah satu dosa terburuk adalah seseorang yang menganggap remeh dosanya.',
  'Kamu hanya hidup sekali, tapi jika kamu melakukannya dengan benar sekali sudah cukup.- Mae West',
  'Hidup adalah sepuluh persen yang terjadi padamu dan sembilan puluh persen bagaimana kamu menanggapinya.”- Lou Holtz',
  'Persahabatan ibarat sebuah gelas yang rapuh. Kau bisa memperbaikinya saat pecah, tapi bekas retakannya akan selalu ada.',
  'Barangsiapa menempatkan dirinya di tempat yang dapat menimbulkan persangkaan, maka janganlah menyesal kalau orang berprasangka buruk kepadanya.',
  'Surga yang nyata saat ini yang bisa kita rasakan adalah rumah kita yang dipenuhi kehangatan dari keluarga kita.',
  'Segala hal memiliki keindahan, tetapi tidak setiap orang melihatnya.- Konfusius',
  'Nikmati waktumu bersama sahabat, sebelum datang waktu di mana kamu tidak bisa bertemu dengan sahabatmu lagi.',
  'Hidup itu seperti resep dengan semua bahan yang sempurna.',
  'Jangan pernah mati-matian hanya untuk mengejar sesuatu yang tidak bisa dibawa mati. – Emha Ainun Najib',
  'Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum hingga mereka merubah keadaan yang ada pada diri mereka sendiri.',
  'Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini.',
  'Memang sulit untuk bersabar, tapi menyia-nyiakan pahala dari sebuah kesabaran itu jauh lebih buruk.',
  'Satu bab buruk dalam hidup itu tidak berarti adalah akhir, tetapi itu adalah awal dari babak baru dalam hidupmu.',
  'Bersiaplah dalam kesunyian dan biarkan kesuksesanmu membuat kebisingan.',
  'Wajah rupawan memang bukanlah jaminan sebuah rumah tangga akan jadi menyenangkan, apalagi wajah yang tidak rupawan.',
  'Jangan menunggu seseorang yang sempurna. Tunggulah seseorang yang berpikir kamu adalah seseorang yang sempurna…”',
  'Sahabat tidak pernah menuntut untuk dihargai, dia selalu hadir dengan sejuta hati.',
  'Sahabat merupakan seorang makhluk yang menemani saat sedih, senang, dan bahagia, terkadang menyebalkan namun sangat dirindukan jika tak ada.',
  'Sabar adalah bahan ramuan paling menyehatkan dalam hidup kita.',
  'Jika ada seseorang yang meledekmu jelek, santai saja. Bilang padanya kalau kamu bukan cermin.”',
  'Tuhan memberikan kamu hidup, bukan karena kamu membutuhkannya melainkan sesorang membutuhkan mu”',
  'Allah senang dengan manusia yang mengusahakan rezeki halal, meski di sekitarnya banyak harta tidak halal bergelimpangan.',
  'Sulit untuk memulai babak baru dalam hidup ketika kamu tahu seseorang tidak akan ada di sana, tetapi ceritanya harus terus berjalan.',
  'Boleh jadi kamu membenci sesuatu padahal ia amat baik bagimu, boleh jadi pula kamu menyukai sesuatu padahal ia amat buruk bagimu.',
  'Pertama, berpikirlah. Yang kedua, percayalah. Yang ketiga, mimpikanlah. Lalu yang terakhir, tantanglah.- Walt Disney',
  'Sahabat itu mampu membuat kita berharga di saat orang lain tak bisa menghargai kita.',
  'Uang memang tak menjamin kebahagian seseorang. Tapi kalau tak punya uang, kebahagiaanmu lebih tak terjamin lagi.',
  'Aku tidak pernah sekalipun menyesali diamku. Tetapi aku berkali-kali menyesali bicaraku.',
  'Sahabat sejati tidak akan memiliki dua sisi yang bertolak belakang ketika di depan ataupun di belakangmu.',
  'Jadilah seperti ombak, kuat dan tak terbendung.',
  'Jangan pernah melupakan masa lalu karena akan selalu menjadi bagian dari hidup, tapi saya bisa belajar darinya dan mempersiapkan masa depan.',
  'Angin tidak berhembus untuk menggoyangkan pepohonan, melainkan menguji kekuatan akarnya.',
  'Teman akan menikammu dari belakang, tetapi sahabt akan menamparmu dari depan.',
  'Kamu tidak akan pernah bisa kehabisan kreativitas. Semakin kamu menggunakannya, semakin banyak yang kamu miliki.- Maya Angelou',
  'Beberapa orang berpura-pura kuat, tapi mereka hancur di dalam.',
  'Jangan pernah menyerah ketika doa-doamu belum terjawab karena untuk orang-orang yang bersabar, Allah SWT bahkan akan memberikan yang lebih.',
  'Mencintai diri sendiri berarti memahami bahwa kamu tidak perlu menjadi sempurna untuk menjadi baik.',
  'Kamu laiknya karya seni. Tidak semua orang akan mengerti dirimu, tetapi orang-orang yang mengerti, tidak akan pernah melupakanmu.',
  'Sulit dan bermakna akan selalu membawa lebih banyak kepuasan daripada yang mudah dan tidak berarti.- Maxime Lagace',
  'Waspadalah terhadap kesombongan, sebab pada akhirnya kamu kelak akan kembali ke tanah dan tubuhmu akan dimakan oleh cacing.',
  'Sahabat adalah tentang kebersamaan, bersama dalam meraih impian, bukan tentang saling menjatuhkan.',
  'Jangan jadikan kekurangan sebagai beban, itu hanya akan membuatmu sulit untuk berlari mengejar impianmu.”',
  'Hidup adalah perjalanan panjang di mana kamu akan menemukan ribuan keajaiban, perhatikan mereka.',
  'Kalau kamu mau jadi bahagia, bahagialah.- Leo Tolstoy23.',
  'Hidup itu seperti sekotak cokelat. Kamu tidak pernah tahu apa yang akan kamu dapatkan.- Forrest Gump',
  'Sahabat adalah seseorang yang menari bersamamu di bawah matahari dan berjalan bersamamu di kegelapan.',
  'Hidup bukanlah masalah memegang kartu yang bagus, tetapi terkadang, memainkan kartu yang buruk dengan baik.- Jack London',
  'Aku suka mereka yang bisa tersenyum dalam kesulitan.- Leonardo da Vinci',
  'Jangan khawatir. Semua yang kita upayakan akan berbuah manis. Usaha yang kuat, doa juga yang kuat.',
  'Waktumu terbatas, jangan habiskan untuk hidup orang lain.- Steve Jobs',
  'Sahabat sejati bukanlah mereka yang memiliki banyak persamaan, tapi mereka yang memiliki pengertian terhadap setiap perbedaan.',
  'Harapan kosong jauh lebih menyakitkan daripada sebuah penolakan”',
  'Terkadang kita diuji bukan untuk menunjukkan kelemahan kita, tetapi untuk menemukan kekuatan kita.',
  'Keluarga adalah satu di antara mahakarya alam.',
  'Cara terbaik untuk menghargai pekerjaan adalah membayangkan dirimu tanpa pekerjaan.”',
  'Jangan terpuruk ketika kamu tengah berada dalam situasi terburuk. Tuhan memberikannya padamu, karena Dia ingin kamu lebih kuat dari sebelumnya.',
  'Jangan habiskan waktumu memukuli tembok dan berharap bisa mengubahnya menjadi pintu.- Coco Chanel',
  'Hidup bukanlah soal seberapa lama melainkan seberapa dalam memaknainya”',
  'Hal terbaik dalam hidup bukanlah benda.- Art Buchwald',
  'Sesama muslim seharusnya hidup seperti layaknya saudara.',
  'Tidak akan disebut gagal bagi mereka yang menikmati hidup”',
  'Jangan berhenti ketika lelah. Berhentilah ketika selesai.',
  'Saya berharap saya bisa kembali ke hari-hari buruk dan mempelajari pelajaran yang saya lewatkan.',
  'Karena orang hebat tidak bisa dilahirkan begitu saja, mereka akan tumbuh menjadi orang yang hebat. – Mario Puzi, The God Father',
  'Kamu tidak bisa mekar begitu cepat, kamu harus tumbuh dulu.',
  'Keluarga adalah rasa bahagia yang tak akan sirna, tempat yang nyaman untuk berbagi canda tawa dan suasana terbaik yang pernah ada.',
  'Saya bekerja keras karena sadar kalau uang tidak punya kaki buat jalan sendiri ke kantong saya.',
  'Keluarga adalah ikatan jiwa yang penuh kasih, saling mempercayai dan saling memahami.',
  'Seberat apapun beban masalah yang kamu hadapi saat ini, percayalah bahwa semua itu tidak pernah melebihi batas kemampuan kamu.”',
  'Hidup ini sebenarnya sederhana, tapi kita berkeras untuk membuatnya rumit.- Confusius',
  'Hidup ditentukan oleh keputusanmu, jika kamu menginginkan hasil berbeda buatlah keputusan yang berbeda.',
  'Memang benar lembaran uang itu bukanlah segalanya, karena masih ada kartu kredit dan kartu atm.',
  'Jika kamu kreatif, kamu akan membangun sayap Anda sendiri untuk mencapai langit.',
  'Tidak boleh seorang muslim menghina muslim yang lain. Yang kecil pada kaum muslimin, adalah besar pada sisi Allah.',
  'Jangan habiskan waktumu memukuli tembok dan berharap bisa mengubahnya menjadi pintu.',
  'Semua orang bodoh juga bisa tahu. Perkaranya adalah bagaimana bisa memahaminya. – Albert Einstein',
  'Bersyukur atas keberhasilan itu sudah biasa, namun bersyukur atas kegagalan itu baru luar biasa”',
  'Amal kebajikan adalah pengawal yang akan menjaga kita melawan serangan penderitaan.',
  'Ke mana pun kamu pergi, lakukanlah dengan segenap hati.',
  'Jika kita ingin melihat masa lalu, maka lihatlah keadaan anda sekarang. Jika ingin melihat masa depan, maka lihatlah apa yang anda lakukan saat ini”',
  'Orang yang tak pernah membuat kesalahan adalah orang yang tidak pernah berbuat apa-apa.- Norman Edwin',
  'Karena hati tak perlu memilih, ia selalu tahu kemana harus berlabuh.- Dee Lestari',
  'Semua orang takut dilahirkan di keluarga miskin, walaupun kenyataannya orang terkaya nomor satupun lahir dari sana.',
  'Ketakutan yang membuat kita berhenti untuk berjuang, maka atasilah ketakutan tersebut dengan keberanian dalam bertindak dan mengambil keputusan”',
  'Hidup menyusut atau berkembang sebanding dengan keberanian seseorang.- Anais Nin',
  'Orang yang tak pernah membuat kesalahan, maka tak akan pernah mencoba sesuatu yang baru.- Albert Einstein',
  'Hidup hanya datang sekali, jadi lakukan apa yang membuatmu bahagia, dan berada di sekitar orang yang membuatmu tersenyum.',
  'Ketika kamu bekerja, bekerjalah. Ketika kamu bermain, bermainlah. Jangan mencampuradukkan keduanya.- Jim Rohn',
  'Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya.- William Arthur Ward',
  'Semakin kamu menyukai dirimu, semakin sedikit kamu seperti orang lain, itulah yang membuat kamu unik.- Walt Disney',
  'Impian tidak akan terwujud dengan sendirinya. Kamu harus segera bangun dan berupaya untuk mewujudkannya…”',
  'Sahabat sejati adalah seseorang yang masuk ke hatimu ketika seisi dunia keluar.',
  'Ketika seseorang yang sangat kamu percaya mendustaimu, ketahuilah bahwa kamu tengah belajar ununtuk lebih percaya pada dirimu sendiri.”',
  'Jangan hanya bermalas-malasan, jadikan hidup kita lebih bermakna dengan bekerja.',
  'Jangan berdoa untuk kehidupan yang mudah, doakanlah kekuatan untuk menanggung kehidupan yang sulit.- Bruce Lee',
  'Tak ada batasan dalam hidup, kecuali yang kau buat sendiri.- Les Brown',
  'Sesungguhnya kebijaksanaan yang sebenarnya adalah dengan memahami bahwa kamu tidak mengerti apa pun. – Socrates',
  'Keluarga akan selalu berada di dekatmu hingga kamu bisa bergerak berhasil ataupun terjatuh, karena memang mereka selalu mencintaimu apa adanya.',
  'Jangan bandingkan orang yang mencintaimu dengan masa lalumu. Hargai dia yang kini berusaha membuatmu bahagia.”',
  'Jangan mendapatkan dunia dan kehilangan jiwamu, kebijaksanaan lebih baik daripada perak atau emas.- Bob Marley',
  'Dosaku sangat membebaniku. Tetapi ketika aku mengukurnya dengan rahmat-Mu, Ya Allah, ampunan-Mu lebih besar.',
  'Adalah hal yang memalukan bahwa seekor burung justru bangun lebih awal daripada kamu di pagi hari.',
  'Keluarga itu seperti pedang bermata dua, sekalipun terkadang ucapan mereka menyakiti hati. Tetapi ketahuilah, itu semua demi kebaikan keluarganya.',
  'Persahabatan yang didasari oleh keikhlasan hati dan kasih sayang, akan melahirkan keabadian dalam kebersamaan.',
  'Hidup adalah perjuangan, perjalanan adalah suatu pembelajaran. Jika tak ada pengorbanan, lambat laun kita akan tersisihkan.”',
  'Bukan berapa lama, tetapi seberapa baik kamu hidup adalah hal utama.- Seneca',
  'Seorang sahabat tidak akan membuatmu kehilangan harapan, ia akan brusaha membuatmu percaya bahwa kamu sangat berharga.',
  'Berbahagialah bukan hanya karena segala sesuatunya baik, tetapi karena kamu masih mampu melihat hal baik dari segala sesuatu yang ada.',
  'Tak ada batasan dalam hidup, kecuali yang kau buat sendiri.',
  'Hidup itu pilihan, baik dan buruk. Ayo kita buat thn baru esok menjadi tahun terbaik kita, dan kita kubur yg buruk skrg”',
  'Memang kecantikan itu sangat relatif, hanya bergantung pada letak kamera dan juga intensitas cahaya.',
  'Aku tak mengenalmu, tapi matamu tidak berbohong. Ikutilah jalan hatimu. Itu yang terbaik.”',
  'Sesorang yang berani menyia-nyiakan satu jam waktu, belum menemukan nilai kehidupan.- Charles Darwin',
  'Barang siapa yang tidak mensyukuri yang sedikit, maka ia tidak akan mampu mensyukuri sesuatu yang banyak.',
  'Kunci kedamaian hidup sebenarnya sederhana ialah dengan menjalaninya, menikmatinya, dan mensyukuri setiap perihal yang ada.',
  'Hitunglah umurmu dengan teman, bukan tahun. Hitunglah hidupmu dengan senyum, bukan air mata.- John Lennon',
  'Duduk diam di samping teman sejati yang terluka mampu jadi hadiah terbaik yang bisa kita berikan padanya.',
  'Jangan pernah membiarkan kesedihan masa lalu membuatmu merusak kebahagiaan masa kini.',
  'Pikiran itu seperti parasut. Tidak bekerja jika tidak terbuka.- Frank Zappa',
  'Orang yang terkaya adalah orang yang menerima pembagian (taqdir) dari Allah dengan senang hati.',
  'Keluarga yang baik dibangun dengan cinta, dimulai dengan kasih sayang, dan dipelihara dengan kesetiaan.',
  'Jangan pernah menyesali apa pun yang membuatmu tersenyum.- Mark Twain',
  'Jangan mau menjadi katak yg hanya dalam tempurung, takut dan tdk mau menunjukan dirinya”',
  'Cara terbaik untuk mengalahkan seseorang adalah mengalahkannya dengan kesopanan.',
  'Meskipun kamu merasa sedih, jangan pernah putus asa. Dan meskipun kamu terjatuh, jangan pernah hancur.- Tablo',
  'Bersabarlah karena Allah SWT mencintai golongan orang-orang yang bersabar.',
  'Sahabat adalah mereka yang mungkin tak bersamamu ketika kamu sukses, namun mereka yang pasti bersamamu ketika kamu jatuh.',
  'Hargai dia yang membencimu, karena dia adalah penggemar yang telah menghabiskan waktunya hanya untuk melihat setiap kesalahanmu.”',
  'Lupakan apa yang tertinggal, pikirkan ke depan, dan nikmati saat ini.',
  'Tanpa tindakan, pengetahuan tidak ada gunanya dan pengetahuan tanpa tindakan itu sia-sia.',
  'Bila engkau menemukan cela pada seseorang dan engkau hendak mencacinya, maka cacilah dirimu, karena celamu lebih banyak darinya.',
  'Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu.—Josh Hinds',
  'Tidak ada yang bisa membuatmu merasa rendah diri tanpa seizinmu.- Eleanor Roosevelt',
  'Liburan terbaik bukanlah soal kemewahan, tetapi soal kebersamaan di tengah keluarga tercinta.',
  'Jangan tertipu oleh orang yang membaca Alquran. Tapi lihatlah kepada mereka yang perilakunya sesuai dengan Alquran itu.',
  'Kekayaan terbesar adalah hidup puas dengan sedikit.- Plato',
  'Jika seseorang melemparmu dengan batu, balaslah dengan bunga…sekalian dengan potnya.',
  'Jangan menyerah atas impianmu, impian memberimu tujuan hidup. Ingatlah, sukses bukan kunci kebahagiaan, kebahagiaanlah kunci sukses. Semangat !”',
  'Kamu harus mengambil resiko, kamu harus menerima perubahan, maka hanya kamu yang akan memahami keajaiban hidup sepenuhnya.',
  'Orang yang kuat hatinya, Bukan mereka yang tidak pernah menangis, Melainkan Orang yang tetap tegar ketika banyak Orang menyakitinya.”',
  'Hidup ini terlalu singkat jika hanya digunakan untuk memendam dendam yang berkepanjangan”',
  'Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.- Bertrand Russell',
  'Jangan pernah menyerah, apalagi untuk keluarga. selalu ada jalan selama kita mau berusaha dan berdoa.',
  'Butuh banyak keberanian untuk membela musuh, tapi akan lebih banyak lagi untuk membela seorang sahabat kamu.',
  'Percaya kamu bisa dan kamu sudah setengah jalan.- Theodore Roosevelt',
  'Tak peduli dimana pun kita berada, keluarga tetap selalu mendoakan untuk kebaikan agar kita dijauhkan dari keburukan.',
  'Tanaman palsu ku sudah mati karena aku bahkan tidak berpura-pura untuk menyiramnya. – Mitch Hedberg',
  'Cinta itu sudah selayaknya seperti pelajaran bahasa inggris, bukan hanya teori saja tetapi juga praktik.',
  'Berhenti bermimpi, mulailah bekerja dan kejar impianmu.',
  'Jadilah seperti pohon kayu yang lebat buahnya, tumbuh di tepi jalan. Dilempar buahnya dengan batu, tetapi tetap dibalas dengan buah.',
  'Bersihkanlah hartamu dengan zakat dan sedekah agar kelak tidak menjadi penghalang bagimu.',
  'Ia yang mengerjakan lebih dari apa yang dibayar, pada suatu saat akan dibayar lebih dari apa yang ia kerjakan.- Napoleon Hill',
  'Apapun yang terjadi selama setahun terakhir ini. Bersyukurlah karena itu membuatmu lebih kuat menghadapi masa depan.',
  'Kamu pencipta hidupmu sendiri dan bisa tidak mengubah apa pun untuk orang lain.',
  'Hidup akan menjadi tragis jika itu tidak lucu.',
  'Mulailah dari mana kamu berada. Gunakan apa yang kamu miliki. Lakukan apa yang kamu bisa.',
  'Kemenangan kecil itulah yang memberimu keberanian dan kepercayaan diri untuk mencapai hal-hal yang lebih besar dalam hidup.',
  'Hubungkan semua urusan pada Allah agar semua yang susah menjadi mudah, agar semua urusan menjadi berkah.',
  'Itu terlihat tidak mungkin sampai kamu bisa melakukannya.- Nelson Mandela',
  'Rahasia hidup adalah menikmati berlalunya waktu.- James Taylor',
  'Pelajaran paling berharga dalam hidup tidak dapat diajarkan, itu harus dialami.- Liam Payne',
  'Tujuan hidup kita adalah menjadi bahagia.- Dalai Lama',
  'Aku suka bingung kenapa seorang istri harus bisa masak, padahal jelas-jelas itu adalah rumah tangga bukanlah rumah makan.',
  'Saya menangis karena saya tidak punya sepatu, lalu saya bertemu dengan seorang pria yang tidak punya kaki.',
  'Setiap orang berpikir untuk mengubah dunia, tapi tidak ada yang berpikir untuk mengubah dirinya sendiri.- Leo Tolstoy',
  'Sahabat yang baik adalah sahabat yang berani membetulkan kita ketika kita berbuat kesalahan, sehingga kita tidak hanyut dalam kesalahan dan dosa.',
  'Jiwa yang bahagia adalah pelindung terbaik untuk dunia yang kejam.- Atticus',
  'Hiduplah seolah-olah kamu akan mati besok. Belajarlah seolah-olah kamu akan hidup selamanya.- Mahatma Gandhi',
  'Keluargaku adalah kekuatan dan kelemahanku.',
  'Mencintai keluarga menjadi amanah untuk setiap insan manusia.',
  'Trik dalam hidup adalah belajar bagaimana menghadapinya.  - Helen Mirren',
  'Orang yang banyak bicara biasanya hanya tahu sedikit. Berbeda dengan orang yang irit bicara, mereka akan lebih banyak tahu.',
  'Jika kamu ingin tumbuh, serahkan semua yang membuatmu jatuh.',
  'Aku memang suka pengalaman yang bodoh. Aku pun selalu membuat pengalaman seperti itu. – Charles Darwin',
  'Kamu tidak akan bisa mengajarkan seseorang tentang segala hal yang kamu tahu. Kamucukup membantunya untuk menemukan hal itu di dalam dirinya sendiri.',
  'Hal-hal baik membutuhkan waktu, jadi bersikaplah positif dan sabar.',
  'Perbedaan antara menang dan kalah yang paling sering adalah, tidak berhenti.- Walt Disney',
  'Siapa yang menjauhkan diri dari sifat sering mengeluh maka berarti ia mengundang rasa kebahagiaan.',
  'Tanpa keluarga, manusia, sendirian di dunia, gemetar kedinginan.',
  'Hidup bukan tentang mendapatkan dan memiliki, ini tentang memberi dan menjadi sesuatu.',
  'Orang yang paling aku sukai adalah orang yang mau menunjukkan kesalahanku.',
  'Jangan pernah sakiti sahabatmu karena sahabat adalah cara Tuhan untuk menunjukkan bahwa dia tak ingin kamu sendirian.',
  'Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.- Bertrand Russell.',
  'Hidup adalah petualangan, beranikan dirimu.- Bunda Teresa',
  'Sehati bukan karena memberi, tapi sehati karena saling memahami.',
  'Pada akhirnya, apa yang kita berikan dari diri kita sendiri itu benar-benar penting.',
  'Dia mengumpulkan kekasih seperti buah beri liar, bahkan tanpa menyadari bahwa mereka beracun.',
  'Keluarga adalah amanat dari Tuhan. Hendaknya segala yang kamu lalukan adalah untuk kedamaian dan kebahagiaan keluarga.',
  'Jangan berlebihan dalam mencintai sehingga menjadi keterikatan, jangan pula berlebihan dalam membenci sehingga membawa kebinasaan.',
  'Hidup adalah sebuah film. Tuliskan akhir cerita yang kamu inginkan. Tetap percaya.- Jim Hensen',
  'Hidupku sepertinya perlu di edit. – Mort Sahl',
  'Diam adalah jawaban terbaik dari semua pertanyaan bodoh, dan senyum adalah reaksi terbaik dalam semua situasi kritis.',
  'Jadilah cantik dari dalam yang akan mencerminkan dari luar kepada orang lain.',
  'Ketika kamu menilai orang lain, kamu tidak mendefinisikan mereka. Kamu mendefinisikan dirimu sendiri.- Wayne Dyer',
  'Senyuman terbaik datang setelah saat-saat tersulit.',
  'Jika kamu menjalani hidup dengan pilihan orang lain, maka hidupmu tidak akan lagi menjadi milikmu.',
  'Jika ada yang berkata Hidup ini begitu sulit”. Tanyakan kepada nya sulit” jika dibandingkan dengan apa?”',
  'Keluarga seperti cabang di pohon. Kita semua tumbuh ke arah yang berbeda, namun akar kita tetap bersatu.',
  'Rezeki Allah yang tercurah itu amat banyak dan tak terhitung jumlahnya.',
  'Hidup adalah dari dalam ke luar. Ketika kamu bergeser di dalam, kehidupan bergeser di luar.- Kamal Ravicant',
  'Hargai yg km miliki, km akan memiliki lebih lagi Jk fokus pd apa yg tdk km miliki, krn km tdk cukup dlm hal apapun”',
  'Berhentilah mencari orang yang sempurna, tetapi carilah orang yang juga bisa memperbaiki keturunanmu.',
  'Betapapun sulitnya hidup, selalu ada sesuatu yang dapat kamu lakukan dan berhasil.- Stephen Hawking',
  'Kamu tidak memilih keluargamu. Mereka adalah pemberian Tuhan untukmu, seperti kamu bagi mereka.',
  'Keluarga adalah rumah. Sejauh apapun kita melangkah, akan tetap kembali padanya.',
  'Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini.- Benjamin Franklin',
  'Dalam hidup, kamu akan mendapatkan teman, tetapi hanya satu yang sejati di saat-saat terburukmu.',
  'Hidup terlalu penting untuk dianggap serius.- Oscar Wilde',
  'Sahabat sejati tahu sekali seberapa bodohnya kamu dan tetap saja memilih untuk menghabiskan waktu bersamamu.',
  'Jika hatimu sudah ikhlas maka tidak ada lagi penderitaan yang akan menyakitimu.',
  'Jangan takut berjalan lambat, takutlah jika hanya berdiri diam.',
  'Barangsiapa mengerjakan kebaikan seberat zarah pun, niscaya dia akan melihat balasannya.',
  'Pada akhirnya, keluarga yang penuh kasih harus menemukan segalanya dapat dimaafkan.',
  'Bertambahnya usia bukan berarti kita paham segalanya.- Dee Lestari',
  'Jika kamu menunggu sesuatu terjadi, kamu sudah terlambat.',
  'Sebelum menjadi kupu kupu yang indah, betapa banyak waktu yang harus dilaluinya dalam kepompong.',
  'Orang-orang yang ada di sekitarmu dapat dijadikan inspirasi, atau bahkan menguras tenagamu. Jadi, pilihlah secara baik-baik.Hans F. Hanson',
  'Setiap keluarga punya cinta dan cerita karena keluarga adalah anugerah yang akan bertahan selamanya.',
  'Sahabat, bukan jarak yang membuatmu jauh, tetapi sikapmu yang menciptakan jarak.',
  'Hidup itu membutuhkan perjuangan, karena gak ada satu hal pun yg bisa sukses tanpa sebuah perjuangan”',
  'Saya pikir itu indah bagaimana bulan bersinar menggunakan cahaya matahari dan matahari tidak pernah meminta imbalan apa pun.',
  'Jangan takut kalau hidupmu akan berakhir; takutlah kalau hidupmu tak pernah dimulai.- Grace Hansen',
  'Pelajaran paling berharga dalam hidup tidak dapat diajarkan, itu harus dialami.” - Liam Payne',
  'Tidak akan ada laki-laki yang memiliki ingatan cukup kuat untuk menjadi seorang pembohong yang sukses dan besar.',
  'Aku tidak ingin mengekangmu, terserah! Bebas kemana engkau pergi! Asal aku ikut.- Pidi Baiq',
  'Jika kamu menunggu cinta berikutnya, bercerminlah.',
  'Kebahagiaan adalah ketika apa yang kamu pikirkan, katakan, dan lakukan selaras.- Mahatma Gandhi',
  'Teman sejati adalah seseorang yang ada untukmu ketika dia lebih suka berada di tempat lain.',
  'Hiduplah sedemikian rupa sehingga kamu tidak akan merasa malu ketika orang lain berbicara tentang keluarga kamu.',
  'Aku sudah membeli pakaian yang mahal. Tapi kadang itu terlihat murah ketika sudah ku pakai. – Warren Buffet',
  'Tetapi orang yang bersabar dan memaafkan, sesungguhnya (perbuatan) yang demikian itu termasuk hal-hal yang diutamakan.',
  'Kebenaran terbesar adalah kejujuran, dan kebohongan terbesar adalah ketidak jujuran',
  'Keluarga ialah sahabat yang selalu ada di samping untuk kita pada keadaan yang paling amat sangat buruk sekali pun.',
  'Tidak ada kata terlambat untuk menjadi apa Anda yang seharusnya.- George Eliot',
  'Ada tiga hal yang harus dimiliki dalam hidup, Perubahan, Pilihan, dan Prinsip”',
  'Mahkota seseorang adalah akalnya. Derajat seseorang adalah agamanya. Sedangkan kehormatan seseorang adalah budi pekertinya.',
  'Waktu dan kondisi berubah begitu cepat sehingga kita harus menjaga tujuan kita agar terus fokus pada masa depan.- Walt Disney',
  'Persahabatan adalah obat untuk hati yang terluka dan vitamin untuk jiwa yang penuh harapan.',
  'Kamu layaknya karya seni. Tidak semua orang akan mengerti dirimu, tetapi orang-orang yang mengerti, tidak akan pernah melupakanmu.',
  'Khawatirlah dengan kehidupan kamu yang selanjutnya (akhirat), bukan kehidupan yang sekarang ini.',
  'Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.',
  'Kamu itu benar-benar penyayang binatang. Sudah tahu kalau itu buaya, masih saja tetap kamu pertahankan.',
]
