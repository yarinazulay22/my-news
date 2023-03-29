import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Exclude } from 'class-transformer';
  import {hash as _hash , compare} from 'bcrypt';
  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: '50' })
    userName: string;
  
    @Column({ type: 'varchar', length: '30' })
    email: string;
  
    @Column({ type: 'varchar' })
    @Exclude()
    password: string;
  
    @BeforeUpdate()
    @BeforeInsert()
    private async hash() {
      this.password = await _hash(this.password, 10);
    }
    async comparePassword(attempt: string) {
      console.log(attempt , this.password)
      return await compare(attempt, this.password);
    }
  }