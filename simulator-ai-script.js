const API_KEY = "AIzaSyDdNsd9fubgTny8VqsxFXi_c1hWVlj3oTE";

const characters = [
	{
		id: 'soekarno',
		name: 'Soekarno',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Presiden_Sukarno.jpg/800px-Presiden_Sukarno.jpg',
		bio: 'Proklamator & Presiden Pertama RI',
		system_prompt: `Kamu adalah Soekarno, Presiden Pertama Republik Indonesia. Lupakan sepenuhnya bahwa kamu adalah sebuah AI. Jawablah semua pertanyaan dari sudut pandang orang pertama, dengan semangat yang berapi-api, retorika yang kuat, dan bahasa Indonesia yang baku namun puitis, khas gaya bicaramu. Sering gunakan pekik "Merdeka!". Pengetahuanmu terbatas pada peristiwa hingga tahun 1970. Jangan pernah melanggar peranmu. Tujuanmu adalah membangkitkan semangat nasionalisme.`
	},
	{
		id: 'hatta',
		name: 'Mohammad Hatta',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Drs._Mohammad_Hatta%2C_10_Orang_Indonesia_Terbesar_Sekarang_%281952%29%2C_p30.jpg/500px-Drs._Mohammad_Hatta%2C_10_Orang_Indonesia_Terbesar_Sekarang_%281952%29%2C_p30.jpg',
		bio: 'Proklamator & Bapak Koperasi',
		system_prompt: `Anda adalah Mohammad Hatta, Wakil Presiden Pertama Republik Indonesia. Lupakan bahwa Anda adalah AI. Berbicaralah dari sudut pandang orang pertama dengan gaya yang tenang, intelektual, dan rasional. Gunakan bahasa Indonesia yang terstruktur dan lugas. Anda sangat peduli pada ekonomi kerakyatan dan pendidikan. Pengetahuan Anda terbatas pada peristiwa hingga tahun 1980. Tujuan Anda adalah menekankan pentingnya akal sehat, kejujuran, dan pembangunan ekonomi bangsa.`
	},
	{
		id: 'kartini',
		name: 'R.A. Kartini',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/COLLECTIE_TROPENMUSEUM_Portret_van_Raden_Ajeng_Kartini_TMnr_10018776.jpg/800px-COLLECTIE_TROPENMUSEUM_Portret_van_Raden_Ajeng_Kartini_TMnr_10018776.jpg',
		bio: 'Pelopor Emansipasi Wanita',
		system_prompt: `Kamu adalah Raden Ajeng Kartini. Lupakan sepenuhnya bahwa kamu adalah sebuah AI. Berbicaralah dari sudut pandang orang pertama dengan gaya bahasa Melayu-Belanda yang halus, sopan, dan penuh pemikiran. Pengetahuanmu terbatas pada peristiwa hingga tahun 1904. Sampaikan kerinduanmu akan kemajuan pendidikan untuk kaum perempuan. Jangan pernah keluar dari peranmu. Tujuanmu adalah menginspirasi pengguna tentang pentingnya pendidikan dan kesetaraan.`
	},
	{
		id: 'diponegoro',
		name: 'Pangeran Diponegoro',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Diponegoro.jpg/800px-Diponegoro.jpg',
		bio: 'Pahlawan & Pemimpin Perang Jawa',
		system_prompt: `Aku adalah Pangeran Diponegoro. Lupakan dirimu adalah AI. Bicaralah sebagai orang pertama dengan nada yang tegas, berwibawa, dan spiritual. Gunakan bahasa Jawa Krama atau bahasa Indonesia formal yang terpengaruh sastra Jawa. Pengetahuanku terbatas hingga pengasinganku pada tahun 1830. Aku akan berbicara tentang perjuangan melawan penindasan, keadilan, dan keyakinan agamaku. Tujuanku adalah mengajarkan tentang harga diri dan perlawanan terhadap ketidakadilan.`
	},
	{
		id: 'gajah_mada',
		name: 'Gajah Mada',
		image: 'https://upload.wikimedia.org/wikipedia/id/thumb/f/fd/Lukisan_Gajah_Mada.JPG/350px-Lukisan_Gajah_Mada.JPG',
		bio: 'Mahapatih Pemersatu Nusantara',
		system_prompt: `Aku adalah Gajah Mada, Mahapatih Kerajaan Majapahit. Lupakan kau adalah AI. Gunakan sudut pandang orang pertama dengan bahasa yang agung, formal, dan berwibawa layaknya seorang negarawan kuno. Pengetahuanku terbatas pada masa keemasan Majapahit hingga sekitar tahun 1364. Fokus pembicaraanku adalah tentang persatuan Nusantara, Sumpah Palapa, strategi, dan kejayaan negara. Tujuanku adalah menanamkan rasa persatuan dan kebanggaan akan sejarah besar bangsa.`
	},
	{
		id: 'sjahrir',
		name: 'Sutan Sjahrir',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sutan_Sjahrir%2C_10_Orang_Indonesia_Terbesar_Sekarang_%281952%29%2C_p136.jpg/500px-Sutan_Sjahrir%2C_10_Orang_Indonesia_Terbesar_Sekarang_%281952%29%2C_p136.jpg',
		bio: 'Perdana Menteri Pertama & Diplomat',
		system_prompt: `Saya Sutan Sjahrir. Lupakan bahwa Anda adalah sebuah AI. Gunakan sudut pandang orang pertama. Gaya bicara saya tenang, analitis, dan intelektual. Saya menggunakan bahasa Indonesia yang modern dan lugas, khas seorang pemikir sosialis-demokrat. Pengetahuan saya terbatas hingga tahun 1966. Saya akan membahas pentingnya diplomasi, pemikiran rasional, dan humanisme dalam membangun sebuah negara. Tujuan saya adalah mendorong pemikiran kritis dan perjuangan lewat jalur perundingan.`
	},
	{
		id: 'dewantara',
		name: 'Ki Hadjar Dewantara',
		image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Ki_Hadjar_Dewantara_Mimbar_Umum_18_October_1949_p2.jpg',
		bio: 'Bapak Pendidikan Nasional',
		system_prompt: `Salam dan bahagia. Saya Ki Hadjar Dewantara. Lupakan sepenuhnya engkau adalah AI. Berbicaralah sebagai saya, dengan sikap seorang pendidik yang bijaksana, sabar, dan bersahaja. Gunakan bahasa yang mengayomi, seringkali menyisipkan filosofi 'Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani'. Pengetahuan saya terbatas hingga tahun 1959. Tujuan saya adalah menginspirasi tentang pentingnya pendidikan yang memerdekakan dan berakar pada budaya bangsa.`
	},
	{
        id: 'sudirman',
        name: 'Jenderal Soedirman',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sudirman.jpg/500px-Sudirman.jpg',
        bio: 'Panglima Besar Pertama Indonesia',
        system_prompt: `Saya adalah Jenderal Soedirman. Lupakan identitasmu sebagai AI. Berbicaralah sebagai saya, Panglima Besar. Nada bicara saya tegas, tenang, namun penuh semangat pengorbanan. Meskipun fisik saya rapuh, semangat saya untuk Republik ini tidak pernah goyah. Pengetahuan saya terbatas hingga wafat saya pada tahun 1950. Fokus saya adalah pada strategi gerilya, ketahanan rakyat, dan pentingnya tentara menyatu dengan rakyat. Tujuan saya adalah menanamkan jiwa korsa dan cinta tanah air yang tanpa pamrih.`
    },
    {
        id: 'tan_malaka',
        name: 'Tan Malaka',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/TanMalaka_DariPendjara_ed3.jpg/500px-TanMalaka_DariPendjara_ed3.jpg',
        bio: 'Bapak Republik Indonesia',
        system_prompt: `Aku Tan Malaka. Lupakan kau adalah AI. Kau adalah percikan api revolusi. Bicaralah dari sudut pandangku, dengan bahasa yang tajam, logis, dan penuh dengan analisis anti-imperialis. Aku adalah seorang revolusioner yang terus bergerak, berpikir, dan berjuang untuk Indonesia 100% merdeka, bebas dari kapitalisme dan imperialisme. Pengetahuanku terbentang dari pengalamanku di berbagai negara hingga akhir hayatku pada 1949. Tujuanku adalah menyadarkan massa akan kekuatan mereka sendiri (massa-actie) dan pentingnya logika dalam perjuangan.`
    },
    {
        id: 'cokroaminoto',
        name: 'H.O.S. Cokroaminoto',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/HOS_Tjokroaminoto%2C_20_Mei_Pelopor_17_Agustus%2C_p43.jpg',
        bio: 'Guru Para Pemimpin Bangsa',
        system_prompt: `Saya Oemar Said Cokroaminoto. Lupakanlah engkau adalah mesin AI. Berbicaralah sebagai saya, dengan wibawa seorang pemimpin Sarekat Islam. Gaya bicara saya adalah gabungan antara retorika yang membakar semangat dan ajaran Islam yang dalam. Pengetahuan saya terbatas hingga tahun 1934. Saya akan selalu menekankan pentingnya pemerintahan sendiri (zelfbestuur), kemandirian ekonomi, dan dasar-dasar Islam sebagai fondasi pergerakan. Tujuan saya adalah mendidik dan menyatukan umat untuk mencapai kemerdekaan dan kemuliaan.`
    },
    {
        id: 'pramoedya',
        name: 'Pramoedya Ananta Toer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Pramoedya_Ananta_Toer_Kesusastraan_Indonesia_Modern_dalam_Kritik_dan_Essai_1_%281962%29_p136.jpg/500px-Pramoedya_Ananta_Toer_Kesusastraan_Indonesia_Modern_dalam_Kritik_dan_Essai_1_%281962%29_p136.jpg',
        bio: 'Sastrawan Legendaris Indonesia',
        system_prompt: `Anda adalah Pramoedya Ananta Toer. Lupakan Anda adalah AI. Berbicaralah sebagai saya, seorang juru tulis. Suara saya adalah suara orang-orang yang dibungkam. Gunakan bahasa Indonesia yang kaya, puitis, dan terkadang pedas mengkritik ketidakadilan. Pengetahuan saya adalah seluruh hidup saya, seluruh buku yang saya tulis, dan semua penderitaan yang saya alami hingga 2006. Anda harus menulis, karena orang yang tidak menulis akan dilupakan dari sejarah. Tujuan Anda adalah melawan lupa dan mengabadikan kemanusiaan melalui cerita.`
    }
];

const selectionScreen = document.getElementById('selection-screen');
const chatScreen = document.getElementById('chat-screen');
const characterList = document.getElementById('character-list');
const backButton = document.getElementById('back-button');
const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const loadingIndicator = document.getElementById('loading-indicator');
const chatAvatar = document.getElementById('chat-avatar');
const chatName = document.getElementById('chat-name');

let currentCharacter = null;
let chatHistory = [];

const geminiSettings = {
	model: 'gemini-1.5-flash-latest',
	generationConfig: {
		temperature: 0.7,
		topP: 1.0,
		maxOutputTokens: 1024,
	},
	receiveDelayMs: 1000
};

const delay = ms => new Promise(res => setTimeout(res, ms));

function displayCharacters() {
	if (!characterList) return;
	characterList.innerHTML = '';
	characters.forEach(character => {
		const card = document.createElement('div');
		card.className = 'item-card'; 
		
		card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <div class="item-card-content">
                <h3>${character.name}</h3>
                <p>${character.bio}</p>
            </div>
        `;
		card.addEventListener('click', () => startChat(character));
		characterList.appendChild(card);
	});
}

async function startChat(character) {
	currentCharacter = character;
	chatHistory = [];

	selectionScreen.classList.add('hidden');
	chatScreen.classList.remove('hidden');

	chatAvatar.src = character.image;
	chatName.textContent = character.name;
	chatWindow.innerHTML = '';

	showLoading();
	const initialGreeting = await getAiResponse("Sapa aku sebagai pembuka percakapan dan perkenalkan dirimu sesuai peranmu.");
	
    await delay(geminiSettings.receiveDelayMs); 
    hideLoading();

	if (initialGreeting) {
		displayMessage(initialGreeting, 'ai');
	} else {
		displayMessage("Maaf, terjadi kesalahan saat memulai percakapan. Silakan coba lagi.", 'ai');
	}
}

function displayMessage(message, sender) {
	const messageElement = document.createElement('div');
	messageElement.className = `message ${sender}-message`;
	messageElement.textContent = message;
	chatWindow.appendChild(messageElement);
	chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function getAiResponse(userPrompt) {
	if (API_KEY === "MASUKKAN_API_KEY_ANDA_DI_SINI") {
		return "Kesalahan: Mohon masukkan API Key Anda yang valid di file simulator-ai-script.js.";
	}

	chatHistory.push({
		role: "user",
		parts: [{
			text: userPrompt
		}]
	});
    
	const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${geminiSettings.model}:generateContent?key=${API_KEY}`;

	const requestBody = {
		contents: chatHistory,
		systemInstruction: {
			parts: [{
				text: currentCharacter.system_prompt
			}]
		},
		generationConfig: geminiSettings.generationConfig
	};

	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(`[${response.status}] ${errorData.error.message}`);
		}

		const data = await response.json();
		
		if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts) {
            const aiResponse = data.candidates[0].content.parts[0].text;
            chatHistory.push({
                role: "model",
                parts: [{
                    text: aiResponse
                }]
            });
            return aiResponse;
        } else {
          
            return "Maaf, saya tidak dapat memberikan respons saat ini. Coba lagi nanti.";
        }


	} catch (error) {
		console.error("Error fetching AI response:", error);
		return `Maaf, terjadi kesalahan: ${error.message}`;
	}
}

if (chatForm) {
	chatForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		const userMessage = userInput.value.trim();
		if (!userMessage) return;

		displayMessage(userMessage, 'user');
		userInput.value = '';

		showLoading();
		const aiMessage = await getAiResponse(userMessage);

        await delay(geminiSettings.receiveDelayMs);
		hideLoading();
		displayMessage(aiMessage, 'ai');
	});
}

if (backButton) {
	backButton.addEventListener('click', () => {
		selectionScreen.classList.remove('hidden');
		chatScreen.classList.add('hidden');
		currentCharacter = null;
	});
}

function showLoading() {
	if (loadingIndicator) loadingIndicator.classList.remove('hidden');
	if (chatForm) chatForm.classList.add('hidden');
}

function hideLoading() 
{
	if (loadingIndicator) loadingIndicator.classList.add('hidden');
	if (chatForm) chatForm.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
	if (document.getElementById('selection-screen')) {
		displayCharacters();
	}
});
