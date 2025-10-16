function getInstructions(model, role) {
  const instructionsData = {
    "Sun Digital": {
      cable: [
        { text: "1. Kabloyu kontrol et (1.5m)" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. Mebranı sun digital ön plastik kapağına yapıştır. Mebran doğru hizalanmalı, kenar yüzeylere taşmamalıdır. Mebran üzerindeleke kir olmamalıdır " },
        {
          text: "2. iç koruma plastiğini ön kapak içine yerleştir ",
        },
        { text: "3. MCU PCB kartı ön kapaktaki koruma plastiği için yerleştir ve 3 vida bölgesini vida ile sık. (2*9-6 vida)" },
        {
          text: "4. Polietilen sünger parçanın sarı koruyucu kağıdını çıkar ve resimde görüldüğü gibi ledlerin arkasına gelecek şekilde yapıştır",
        },
        /* {
          text: "5. Ön kapakta görsel ve fonksiyonel kontrol yap. Tuşlara basıldığında çalışmıyorsa; tornavida yardımıyla vidalar sıkılmalıdır. Ürün üzerinde kirlilik leke olmamalı, tuşlar çalışır durumda olmalıdır.",
        }, */
      ],
      assembly: [
        { text: "1. Rezistanstan gelen iki siyah kablo uçlarını resimdeki gibi powerdaki yeşil terminalin resist yazan bölgesine yerleştir ve vidayı sabitle" },
        {
          text: "2. Rezistansdan ve güç kablosundan gelen sarı-yeşil renkli tapraklama kablolarının uçlarını gri renkli klemense yerleştir ve sık",
        },
        /* { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" }, */
        {
          text: "3. Ön kapak ve rezistans geçiş pimleri yardımıyla takılır.",
        },
        {
          text: "4. Kurbağa ağzı yardımıyla ön ve arka kapak birleştirilerek sıkılır. 4 tane vida ile arka ve ön kapak irbirine sabitlenir. ",
        },
      ],
      testing: [
        { text: "1. TEST" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    "Multiple - Yatay - Dry - V2": {
      cable: [
        { text: "1. Arka kapağa Bus kablo ve NTC tapası tak" },
        {
          text: "2. Ön kapağa mebran yapıştır. ON-OFF Butonu Sağ üst kısımda olmalıdır",
        },
        {
          text: "3. MCU Kartı ön kapağa vidala ve tırnakları tak",
        },
        {
          text: "4. MCU Kartının açıkta kalan bölgesine sünger yapıştır",
        },
      ],
      soldering: [
        { text: "5. Power Kartını MCU Kartına monte et ve pinleri lehimle " },
        {
          text: "6. Besleme kablolarını PCB üzerinde ki klemense tak ",
        },
        { text: "7. Power kartına terminal kablolarını lehimle (4.8 erkek dik)" },
        {
          text: "8. Beyaz plastiği setskur somunu geçir ve setskur civatasını tak. Beyaz plastiğini monte et ve vidasını tak",
        },
        /* {
          text: "5. Ön kapakta görsel ve fonksiyonel kontrol yap. Tuşlara basıldığında çalışmıyorsa; tornavida yardımıyla vidalar sıkılmalıdır. Ürün üzerinde kirlilik leke olmamalı, tuşlar çalışır durumda olmalıdır.",
        }, */
      ],
      assembly: [
       { text: "5. Power Kartını MCU Kartına monte et ve pinleri lehimle " },
        {
          text: "6. Besleme kablolarını PCB üzerinde ki klemense tak ",
        },
        { text: "7. Power kartına terminal kablolarını lehimle (4.8 erkek dik)" },
        {
          text: "8. Beyaz plastiği setskur somunu geçir ve setskur civatasını tak. Beyaz plastiğini monte et ve vidasını tak",
        },
      ],
      testing: [
        { text: "1. TEST" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    "Digital - S": {
      cable: [
        { text: "1. Kabloyu kontrol et (1.5m)" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. Mebranı sun digital ön plastik kapağına yapıştır. Mebran doğru hizalanmalı, kenar yüzeylere taşmamalıdır. Mebran üzerindeleke kir olmamalıdır " },
        {
          text: "2. iç koruma plastiğini ön kapak içine yerleştir ",
        },
        { text: "3. MCU PCB kartı ön kapaktaki koruma plastiği için yerleştir ve 3 vida bölgesini vida ile sık. (2*9-6 vida)" },
        {
          text: "4. Polietilen sünger parçanın sarı koruyucu kağıdını çıkar ve resimde görüldüğü gibi ledlerin arkasına gelecek şekilde yapıştır",
        },
        /* {
          text: "5. Ön kapakta görsel ve fonksiyonel kontrol yap. Tuşlara basıldığında çalışmıyorsa; tornavida yardımıyla vidalar sıkılmalıdır. Ürün üzerinde kirlilik leke olmamalı, tuşlar çalışır durumda olmalıdır.",
        }, */
      ],
      assembly: [
        { text: "1. Rezistanstan gelen iki siyah kablo uçlarını resimdeki gibi powerdaki yeşil terminalin resist yazan bölgesine yerleştir ve vidayı sabitle" },
        {
          text: "2. Rezistansdan ve güç kablosundan gelen sarı-yeşil renkli tapraklama kablolarının uçlarını gri renkli klemense yerleştir ve sık",
        },
        /* { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" }, */
        {
          text: "3. Ön kapak ve rezistans geçiş pimleri yardımıyla takılır.",
        },
        {
          text: "4. Kurbağa ağzı yardımıyla ön ve arka kapak birleştirilerek sıkılır. 4 tane vida ile arka ve ön kapak irbirine sabitlenir. ",
        },
      ],
      testing: [
        { text: "1. TEST" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    "Digital - SQ": {
      cable: [
        { text: "1. Kabloyu kontrol et (1.5m)" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      assembly: [
        { text: "1. LEHİMLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      testing: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    "Up & Down - S": {
      cable: [
        { text: "1. Kabloyu kontrol et (5.5m)" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      assembly: [
        { text: "1. LEHİMLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      testing: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    "Up & Down - SQ": {
      cable: [
        { text: "1. Kabloyu kontrol et (5.5m)" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      assembly: [
        { text: "1. LEHİMLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      testing: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    "Up & Down": {
      cable: [
        { text: "1. Kabloyu kontrol et (5.5m)" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      assembly: [
        { text: "1. LEHİMLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      testing: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    "Eco Multiple": {
      cable: [
        { text: "1. Kabloyu kontrol et (5.5m)" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      assembly: [
        { text: "1. LEHİMLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      testing: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    Sigma: {
      cable: [
        { text: "1. Kabloyu kontrol et (5.5m)" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      assembly: [
        { text: "1. LEHİMLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      testing: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    "On & Off": {
      cable: [
        { text: "1. Kabloyu kontrol et (5.5m)" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      assembly: [
        { text: "1. LEHİMLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      testing: [
        { text: "1. Kabloyu kontrol et (2.5m)" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. PAKETLEME" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
    "One Touch": {
      cable: [
        { text: "1. One Touch kablo" },
        {
          text: "2. Kablo geçiş plastiğini(buss) kabloya tak. Kablo geçiş plastiğinin kabloya tam  olarak oturduğundan emin ol",
        },
        {
          text: "3. Sensör kapağı  arka kapak plastiğinin iç kısmından tak ve yerleştir",
        },
        {
          text: "4. Arka kapağın iç kısmından ve dış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağın iç kısmından ve dış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      assembly: [
        { text: "1. one touch lehimleme" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      soldering: [
        { text: "1. one touch montaje" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      testing: [
        { text: "1. one touch test" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
      packaging: [
        { text: "1. one touch paketleme" },
        {
          text: "2. Kasdgasdgstiğini kabloya tak. Kablo geçiş plastiğinin kabloya tam olarak oturduğundan emin ol",
        },
        { text: "3. Sensöasdgasdgğinin iç kısmından tak ve yerleştir" },
        {
          text: "4. Arka kapağınasdgsdgsdgsdgdış kısmındansensörkapağını tornavida yardımı ile sabitle",
        },
        {
          text: "5. Arka kapağınasdgsdgsdgsdgdış kısmından sensör kapağını tornavida yardımı ile sabitle",
        },
      ],
    },
  };

  return instructionsData[model] && instructionsData[model][role]
    ? instructionsData[model][role]
    : [];
}

socket.on("updateModel", ({ model, role }) => {
  console.log("Model ve Role geldi:", model, role); 
  document.getElementById("modelTitle").innerText = `Model: ${model}`;

  const instructions = getInstructions(model, role);
  console.log("Talimatlar:", instructions); 
  const instructionList = document.getElementById("instructionList");
  const imageList = document.getElementById("imageList");

  instructionList.innerHTML = ""; 
  imageList.innerHTML = ""; 

  if (instructions.length === 0) {
    instructionList.innerHTML = "<p>Bu role uygun talimat bulunamadı.</p>";
    return;
  }

  instructions.forEach((step, index) => {
    if (step.text) {
      const div = document.createElement("div");
      div.classList.add("instruction");
      div.innerText = step.text;
      instructionList.appendChild(div);
    }
  });

  const images = getInstructions(model, "images");
  images.forEach((imageSrc) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Talimat Resmi";
    imageList.appendChild(img);
  });
});
