import UserRepo from "./repos/userRepo";
import RefreshTokenRepo from "./repos/refreshTokenRepo";
import EmailVerificationTokenRepo from "./repos/emailVerificationTokenRepo";
import ShopRepo from "./repos/shopRepo";
import ProductRepo from "./repos/productRepo";
import SearchRepo from "./repos/searchRepo";
import UserService from "./services/userService";
import AuthService from "./services/authService";
import ShopService from "./services/shopService";
import ProductService from "./services/productService";
import SearchService from "./services/searchService";

export class Repos {
  ctx: Context;
  user: UserRepo;
  refreshToken: RefreshTokenRepo;
  emailVerificationToken: EmailVerificationTokenRepo;
  shop: ShopRepo;
  product: ProductRepo;
  search: SearchRepo;

  constructor(ctx: Context) {
    this.ctx = ctx;
    this.user = new UserRepo(ctx);
    this.refreshToken = new RefreshTokenRepo(ctx);
    this.emailVerificationToken = new EmailVerificationTokenRepo(ctx);
    this.shop = new ShopRepo(ctx);
    this.product = new ProductRepo(ctx);
    this.search = new SearchRepo(ctx);
  }
}

export class Services {
  ctx: Context;
  user: UserService;
  auth: AuthService;
  shop: ShopService;
  product: ProductService;
  search: SearchService;

  constructor(ctx: Context) {
    this.ctx = ctx;
    this.user = new UserService(ctx);
    this.auth = new AuthService(ctx);
    this.shop = new ShopService(ctx);
    this.product = new ProductService(ctx);
    this.search = new SearchService(ctx);
  }
}

export class Context {
  services: Services;
  repos: Repos;

  constructor() {
    this.services = new Services(this);
    this.repos = new Repos(this);
  }
}
