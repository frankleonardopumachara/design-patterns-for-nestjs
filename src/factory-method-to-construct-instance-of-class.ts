// disadvantage
class User {
  name = ''
  lastName = ''

  constructor(name: string, lastName: string) {
    this.name = name
    this.lastName = lastName
  }
}

const user = new User('Mario', 'Ario')

// pattern
interface UserProps {
  name: string;
  lastName: string;
}

class User1 {
  name = ''
  lastName = ''

  public constructor({ name, lastName }: UserProps) {
    this.name = name
    this.lastName = lastName
  }
}

const user1 = new User1({ name: 'Mario', lastName: 'Ario' })

// second pattern
class User2 {
  name = ''
  lastName = ''

  public static from({ name, lastName }: UserProps) {
    const user = new User2()
    user.name = name
    user.lastName = lastName
    return user
  }
}

const user2 = User2.from({ name: 'Mario', lastName: 'Ario' })

