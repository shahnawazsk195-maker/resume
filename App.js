// console.log("App.js load ho gayi hai");

// function App() {
//     const [formData, setFormData] = React.useState({ name: '', email: '', exp: '', skills: '' });
//     const [tip, setTip] = React.useState('');

//     const handleAI = () => {
//         if (formData.exp.length < 20) setTip("AI Suggestion: Please Mention your Experience in detail.")
//         else if (!formData.skills.includes(',')) setTip("AI Suggestion: Please separatemyour skills using comma(,)");
//         else setTip("AI Suggestion: Your Resume looking good!");
//     };

//     const handleSave = async () => {
//         await axios.post('http://localhost:5000/api/save', formData);
//         alert("Data Saved in MongoDB!");
//     };

//     return (
//         <div className="p-10 bg-gray-50 min-h-screen font-sans">
//             <h1 className="text-3xl font-bold mb-5 text-purple-700">Smart Resume Builder</h1>
//             <div className="flex gap-10">
//                 <div className="w-1/2 bg-white p-5 shadow-lg rounded">
//                     <input className="w-full border p-2 mb-3" placeholder="Full Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
//                     <input className="w-full border p-2 mb-3" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
//                     <textarea className="w-full border p-2 mb-3" placeholder="Experience" onChange={e => setFormData({ ...formData, exp: e.target.value })}></textarea>
//                     <input className="w-full border p-2 mb-3" placeholder="Skills(React, Node...)" onChange={e => setFormData({ ...formData, skills: e.target.value })} />

//                     <button onClick={handleAI} className="bg-purple-500 text-white p-2 rounded mr-2">Get AI Suggestion</button>
//                     <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded">Save to DB</button>
//                 </div>

//                 <div className="w-1/2 bg-white p-10 shadow-2xl border-t-4 border-purple-600" id="print-area"><h2 className="text-2xl font-bold">{formData.name || "YOUR NAME"}</h2>
//                     <p className="text-blue-600 underline">{formData.email || "email@example.com"}</p>
//                     <hr className="my-4" />
//                     <h3 className="font-bold">Experience</h3>
//                     <p>{formData.exp || "Work details..."}</p>
//                     <h3 className="font-bold mt-4">SKILLS</h3>
//                     <p>{formData.skills || "Skills list..."}</p>
//                     <p className="mt-5 text-sm italic text-purple-600">{tip}</p>
//                     <button onClick={() => window.print()} className="mt-5 bg-black text-white p-2 w-full">Export PDF</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);

// const rootElement = document.getElementById('root');
// if(rootElement){
//     const root = ReactDOM.createRoot(rootElement);
//     root.render(React.createElement(App));
// }