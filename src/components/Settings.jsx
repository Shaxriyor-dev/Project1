
export default function BasicTabs() {
 

  return (
    <div className="h-full text-black p-5">
    <div className="w-full h-full max-w-4xl ml-[27%]  ">
      <h2 className="text-4xl font-bold text-center mb-6">Settings</h2>
      <div className="flex justify-center gap-32">
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2"> Profile Information</h3>
        <div className="grid flex-wrap   gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 w-[500px] rounded-lg" />
          <input type="email" placeholder="Email Address" className="border p-3 w-[500px] rounded-lg " />
          <input type="text" placeholder="Username" className="border p-3 w-[500px] rounded-lg " />
          <input type="password" placeholder="New Password" className="border p-3 w-[500px] rounded-lg " />
        </div> 
        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Save Changes
        </button>
      </div>
      <div className="mb-10 font-[Gotu] ">
        <h3 className="text-2xl w-[400px] font-semibold mb-4 border-b pb-2"> Notification Preferences</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input type="checkbox" id="emailNotifications" className="mr-2" />
            <label htmlFor="emailNotifications">Receive Email Notifications</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="smsNotifications" className="mr-2" />
            <label htmlFor="smsNotifications">Receive SMS Notifications</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="appNotifications" className="mr-2" />
            <label htmlFor="appNotifications">In-App Notifications</label>
          </div>
        </div>
      </div>
      </div>
   </div>
  </div>
  
  );
}
