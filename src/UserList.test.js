import { render, screen,within } from '@testing-library/react';
import UserList from './UserList';

test('render one row', () => {
  const userList = [
    {
      name: 'shashi',
      email: 'shashi@shashi.com'
    },
    {
      name: 'ravi',
      email: 'ravi@ravi.com'
    }

  ]

  render(<UserList users={userList} />);
  const rows = within(screen.getByTestId('users')).getAllByRole('row')
 expect(rows).toHaveLength(2)

});

