import { useState } from 'react';

// Set the amount of teams and the amount of members in each team
const teams = [
  { name: 'Team A', maxMembers: 15, currentMembers: 10 },
  { name: 'Team B', maxMembers: 15, currentMembers: 15 },
  { name: 'Team C', maxMembers: 15, currentMembers: 12 },
];

const Register = () => {
  // Set the initial state of the form
  const [formData, setFormData] = useState({
    team: '',
    parentFirstName: '',
    parentLastName: '',
    playerFirstName: '',
    playerLastName: '',
    parentEmail: '',
    parentPhone: '',
  });

  // Set the initial state of the form errors
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log('Form submitted successfully', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  // Validate form data
  const validateForm = (data) => {
    const errors = {};
    if (!data.team) errors.team = 'Team selection is required';
    const selectedTeam = teams.find(team => team.name === data.team);
    if (selectedTeam && selectedTeam.currentMembers >= selectedTeam.maxMembers) {
      errors.team = 'This team is already full';
    }
    if (!data.parentFirstName) errors.parentFirstName = 'Parent first name is required';
    if (!data.parentLastName) errors.parentLastName = 'Parent last name is required';
    if (!data.playerFirstName) errors.playerFirstName = 'Player first name is required';
    if (!data.playerLastName) errors.playerLastName = 'Player last name is required';
    if (!data.parentEmail) errors.parentEmail = 'Parent email is required';
    if (!data.parentPhone) errors.parentPhone = 'Parent phone number is required';
    return errors;
  };

  return (
    <div className="max-w-md mx-auto bg-base-100 p-5 shadow-md rounded-lg text-secondary my-3">
      <h1 className="text-2xl font-bold mb-3 text-center text-primary mb-6">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Team</label>
          <select
            name="team"
            value={formData.team}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a team</option>
            {teams.map((team, index) => (
              <option key={index} value={team.name} disabled={team.currentMembers >= team.maxMembers}>
                {team.name} ({team.currentMembers}/{team.maxMembers} members)
              </option>
            ))}
          </select>
          {errors.team && <p className="text-red-500 text-sm">{errors.team}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Parent First Name</label>
          <input
            type="text"
            name="parentFirstName"
            value={formData.parentFirstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.parentFirstName && <p className="text-red-500 text-sm">{errors.parentFirstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Parent Last Name</label>
          <input
            type="text"
            name="parentLastName"
            value={formData.parentLastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.parentLastName && <p className="text-red-500 text-sm">{errors.parentLastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Player First Name</label>
          <input
            type="text"
            name="playerFirstName"
            value={formData.playerFirstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.playerFirstName && <p className="text-red-500 text-sm">{errors.playerFirstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Player Last Name</label>
          <input
            type="text"
            name="playerLastName"
            value={formData.playerLastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.playerLastName && <p className="text-red-500 text-sm">{errors.playerLastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Parent Email</label>
          <input
            type="email"
            name="parentEmail"
            value={formData.parentEmail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.parentEmail && <p className="text-red-500 text-sm">{errors.parentEmail}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Parent Phone Number</label>
          <input
            type="text"
            name="parentPhone"
            value={formData.parentPhone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.parentPhone && <p className="text-red-500 text-sm">{errors.parentPhone}</p>}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-info text-white font-bold rounded hover:bg-success"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register