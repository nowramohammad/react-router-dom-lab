{/*import React from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [mailboxId, setMailboxId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Mailbox:
        <select
          value={mailboxId}
          onChange={(e) => setMailboxId(e.target.value)}
          required
        >
          <option value="">Select a mailbox</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox._id}
            </option>
          ))}
        </select>
      </label>
      <label>
        Recipient:
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button type="submit">Send Letter</button>
    </form>
  );
};
  export default LetterForm;*/}