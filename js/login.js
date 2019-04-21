var  login = ({
    template: `
        <div>
            <form action="#">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd">
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"> Remember me
                    </label>
                </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>`
    ,
    data() {
      return {
        user: {
          email: '',
          password: '',
          name: '',
          phone: ''
        },
        valid: true,
        success: false,
        errors: {},
        message: null
      }
    
    },
    methods: {

    }
})