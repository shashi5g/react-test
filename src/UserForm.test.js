import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  // render the component
  render(<UserForm />);


  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);  //jest
  expect(button).toBeInTheDocument();// testting librARY
});
test("it calls onUserAdd when the form is submitted", async () => {
   const mock = jest.fn()
    render(<UserForm onAddUser={mock}/>);
   
    const nameField = screen.getByRole('textbox',{name:/name/i})
    const emailField = screen.getByRole('textbox',{name:/email/i})
 
    // Simulate typing in a name
    user.click(nameField);
     user.keyboard("shashi");

 
   
    // Simulate typing in an email
     user.click(emailField);
     user.keyboard("shashi@shashi.com");
   
    // Find the button
    const button = screen.getByRole('button');
    
    user.click(button);

    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({name:'shashi',email:'shashi@shashi.com'})

  });