import { Validator, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class MatchPassowords implements Validator {

  validate(formGroup: FormGroup) {
    const { password, confirmPass } = formGroup.value

    if (password === confirmPass) {
      return null
    } else {
      return { passDontMatch: true }
    }
  }
}
