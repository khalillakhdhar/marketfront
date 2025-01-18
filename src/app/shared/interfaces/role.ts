import { User } from "./user";

export interface Role {
  /*
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @ManyToMany(mappedBy = "roles", fetch = FetchType.LAZY)
    @JsonIgnoreProperties("roles") // Prevent cyclic references
    private Set<UserInfo> users = new HashSet<>();
  */
id:number;
name:string;
users:User[];
}
